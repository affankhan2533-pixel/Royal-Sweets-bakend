import { MongoClient, MongoClientOptions } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI || "";
const options: MongoClientOptions = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient | null>;

if (uri) {
  client = new MongoClient(uri, options);
  clientPromise = client.connect()
    .then((conn) => {
      console.log("Connected to MongoDB successfully");
      return conn;
    })
    .catch((err) => {
      console.error("Failed to connect to MongoDB:", err);
      return null;
    });
} else {
  console.warn("MONGODB_URI not set — running with mock data in routes");
  clientPromise = Promise.resolve(null);
}

export default clientPromise;
