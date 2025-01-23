import { MongoClient } from 'mongodb';

if (!process.env.MONGO_URI) {
    throw new Error('Please define the MONGO_URI environment variable');
}

const uri = process.env.MONGO_URI;
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
    // Use a global variable to prevent multiple instances during hot reloads in development
    if (!globalThis._mongoClientPromise) {
        client = new MongoClient(uri);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // Create a new MongoClient instance in production
    client = new MongoClient(uri);
    clientPromise = client.connect();
}

export default clientPromise;
