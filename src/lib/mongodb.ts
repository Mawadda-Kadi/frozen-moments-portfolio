import { MongoClient } from 'mongodb';

// Ensure the environment variable is defined
if (!process.env.MONGO_URI) {
    throw new Error('Please define the MONGO_URI environment variable');
}

const uri = process.env.MONGO_URI;
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
    // Use a global variable to prevent multiple connections during hot reloads
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // Create a new MongoClient instance for production
    client = new MongoClient(uri);
    clientPromise = client.connect();
}

export default clientPromise;
