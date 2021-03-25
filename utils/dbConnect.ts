import mongoose from "mongoose";
import config from "config";

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  if (!config.DB_URI) throw new Error("No URI connection string was provided");

  return mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
}

export default dbConnect;
