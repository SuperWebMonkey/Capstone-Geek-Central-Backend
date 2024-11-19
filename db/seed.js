import "dotenv/config";
// Require connection file to connect
import mongoose from "mongoose";

// Models for insertion and delete methods
import ProductModel from "../models/products.js";

//  Importing db connection
import con from "./connect.js";

const seed = async () => {
  await con();

  try {
    const items = [
      {
        title: "Wireless Headphones",
        price: 150.99,
        description:
          "High-quality Bluetooth headphones with noise cancellation.",
        category: "electronics",
      },
      {
        title: "Smartphone Case",
        price: 19.99,
        description: "Durable and stylish case for your smartphone.",
        category: "electronics",
      },
      {
        title: "4K Ultra HD TV",
        price: 799.99,
        description: "55-inch LED TV with stunning 4K resolution.",
        category: "electronics",
      },
      {
        title: "Action Movie Collection",
        price: 49.99,
        description: "A collection of 10 best-selling action movies.",
        category: "movies",
      },
      {
        title: "Sci-Fi Movie Trilogy",
        price: 29.99,
        description:
          "Trilogy box set of a classic science fiction film series.",
        category: "movies",
      },
      {
        title: "Bluetooth Speaker",
        price: 59.99,
        description:
          "Portable Bluetooth speaker with deep bass and waterproof design.",
        category: "electronics",
      },
      {
        title: "Anime Poster Set",
        price: 15.99,
        description:
          "Set of 4 high-quality posters from your favorite anime series.",
        category: "anime",
      },
      {
        title: "Anime Action Figure",
        price: 39.99,
        description: "Collectible action figure from popular anime series.",
        category: "anime",
      },
      {
        title: "Wireless Gaming Mouse",
        price: 69.99,
        description: "High-precision wireless mouse for gaming enthusiasts.",
        category: "electronics",
      },
      {
        title: "Anime DVD Collection",
        price: 99.99,
        description: "Complete DVD box set of a top-rated anime series.",
        category: "anime",
      },
    ];

    console.log(items);
  } catch (e) {
    console.log(e);
  } finally {
    await mongoose.connection.close();
  }
};

export default seed;
