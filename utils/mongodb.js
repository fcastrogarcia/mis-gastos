import mongoose from "mongoose";

const { MONGODB_URI, MONGODB_URI_DEV, MONGODB_DB, NODE_ENV } = process.env;

const uri = NODE_ENV === "development" ? MONGODB_URI_DEV : MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
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

    cached.promise = mongoose.connect(uri, opts);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
