import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
import { User, Calendar} from './types.ts'

dotenv.config({ path: "src/.env.local" });

// get mongo db uri string from enviroment file
const uri: string | undefined = process.env.MONGODB_URI;
const client = new MongoClient(uri!);
const database = client.db('cotangles');

async function connectDB() {
  try {
    const users = database.collection('users');

    const query = { name: 'Jane Doe' };
    const user = await users.findOne(query);
    console.log(user);

    return client.db('cotangles'); 
  } catch (error) {
    console.error("failed to connect", error);
    throw error; 
  }
}

const usersCollection = database.collection<User>('users');

// fetch or create google Id if not found
export async function fetchOrCreateByGoogleId(googleId: string, email: string): Promise<User> {
  try {
      await client.connect();
      // tries to find user by googleId
      let user = await usersCollection.findOne({ googleId });

      // if no user create a new user
      if (!user) {
          const newUser: User = { 
            _id: new ObjectId(),
            googleId: googleId,
            email: email,
            name: "",
            ical: "",
            calendars: [],
            invites: []
            // add more fields if needed
          }; 

          const result = await usersCollection.insertOne(newUser);
          user = await usersCollection.findOne({ _id: result.insertedId });
      }
      return user!;
  } catch (error) {
      console.error("no id", error);
      throw error;
  } finally {
      await client.close();
  }
}

// deserializes a user by googleId
export async function deserializeUserById(id: string): Promise<User | null> {
  try {
      await client.connect();
      // tries to find id
      const user = await usersCollection.findOne({ _id: new ObjectId(id) });
      return user;
  } catch (error) {
      console.error("not found", error);
      throw error;
  } finally {
      await client.close();
  }
}

// sets whole data of the collection
export async function setData(collectionName: string, data: User| Calendar) {
  try {
    const db = await connectDB();
    const collection = db.collection(collectionName);
    return await collection.insertOne(data);  // insert data in collection
  } catch (error) {
    console.error("failed set data", error);
  }
}

// gets whole data of the colelction
export async function getData(collectionName: string, query = {}) {
  try {
    const db = await connectDB();
    const collection = db.collection(collectionName); 
    return await collection.find(query).toArray(); // finds data in collection
  } catch (error) {
    console.error("failed fetching data", error);
  }
}

process.on("SIGINT", async () => {
  await client.close();
  console.log("MongoDB connection closed");
  process.exit(0);
});

connectDB().catch(console.dir);