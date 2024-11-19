import "dotenv/config";
// Require connection file to connect
import mongoose from "mongoose";

// Models for insertion and delete methods
import UserModel from "../models/products.js";

//  Importing db connection
import con from "./connect.js";

const seed = async () => {
  await con();

  try {
  } catch (e) {
    console.log(e);
  } finally {
    await mongoose.connection.close();
  }
};

export default seed;
