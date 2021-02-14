import mongoose from "mongoose";
import config from "config";

const { DB_URI, MONGODB_DB } = config;

if (!DB_URI) {
  throw new Error("Please define the DB_URI environment variable inside .env.local");
}

if (!MONGODB_DB) {
  throw new Error("Please define the MONGODB_DB environment variable inside .env.local");
}

let cached = global.mongo;

if (!cached) {
  cached = global.mongo = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = mongoose.connect(DB_URI, opts);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
