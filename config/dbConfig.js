import mongoose from "mongoose";

const dbConnector = async () => {
  try {
    const uri = process.env.MONGODB_URI;

    console.log("MONGODB_URI exists:", !!uri);
    console.log("Connecting to MongoDB...");

    if (!uri) {
      throw new Error("MONGODB_URI is not defined");
    }

    await mongoose.connect(uri, {
      family: 4,
      serverSelectionTimeoutMS: 10000,
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:");
    console.error(error?.name);
    console.error(error?.message);
    console.error(error?.reason || error?.stack || error);
  }
};

export default dbConnector;
