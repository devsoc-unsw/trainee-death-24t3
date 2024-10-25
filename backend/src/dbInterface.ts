import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config({ path: "src/.env.local" });

// get mongo db uri string from enviroment file
const uri: string | undefined = process.env.MONGODB_URI;
const client = new MongoClient(uri!);

async function connectDB() {
  try {
    const database = client.db('cotangles');
    const users = database.collection('users');

    // fetch a user with specified name
    const query = { name: 'Jane Doe' };
    const user = await users.findOne(query);

    console.log(user);
  } finally {
    // ensures that the client will close when you finish/error
    await client.close();
  }
}

connectDB().catch(console.dir);