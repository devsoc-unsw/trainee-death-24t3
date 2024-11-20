import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { User } from './types.ts'

dotenv.config({ path: "src/.env.local" });

// get mongo db uri string from enviroment file
const uri: string | undefined = process.env.MONGODB_URI;
const client = new MongoClient(uri!);

async function connectDB() {
  try {
    const database = client.db('cotangles');
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

export async function setData(collectionName: string, data: User) {
  try {
    const db = await connectDB();
    const collection = db.collection(collectionName);
    return await collection.insertOne(data);  // insert data in collection
  } catch (error) {
    console.error("failed set data", error);
  }
}

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