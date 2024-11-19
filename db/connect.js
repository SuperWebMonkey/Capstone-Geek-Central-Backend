import "dotenv/config";
import mongoose from "mongoose";

export async function connect() {
  try {
    const conn = await mongoose.connect(process.env.ATLAS_URI);
    console.log(`Connected to MongoDB ${conn.connections[0].name}`);
  } catch (e) {
    console.log("Error connecting to MongoDB:", e);
  }
}

export default connect;
