/**
 *
 * To start the application, type npm run dev
 *
 */

import express from "express";
import "dotenv/config";
import morgan from "morgan";
import cors from "cors";
import Seeds from "./db/seed.js";
import Conn from "./db/connect.js";
import productRoute from "./routes/productRoute.js";

const PORT = process.env.PORT || 3000;
const app = express();

// Body parser middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/products", productRoute);

// Connections
await Seeds();
await Conn();

// Main route
app.get("/", async (req, res) => {
  res.send("Welcome to the API");
});

//Global Error handling middlware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Seems like we messed up somewhere...");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
