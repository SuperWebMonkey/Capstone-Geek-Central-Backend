import express from "express";
import products from "../models/products.js";

const router = express.Router();

/**
 *
 * GET all products
 * @description return an array of product objects
 *
 */
router.get("/", async (req, res) => {
  try {
    const allProducts = await products.find();
    res.json(allProducts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

/**
 *
 * GET a single product by ID in /products/:id
 * @description return a single chat by the id
 *
 */
router.get("/:id", async (req, res, next) => {
  try {
    // const { id } = req.params;
    const product = await products.findById(req.params.id);
    // other method
    // const product = await products.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }

    res.status(200).json(product);
  } catch (e) {
    res.status(500).json({ message: "Error fetching product", error: e });
  }
});

/**
 *
 * POST /products
 * @description create a new product
 *
 */
router.post("/", async (req, res, next) => {
  const { title, price, description, category } = req.body;

  // Check if each key exists
  if (!title || !description || !price || !category) {
    return res.status(400).json({
      message:
        "All fields (title, description, price, category, stock) are required",
    });
  }

  // Check for valid categories
  const validCategories = ["electronics", "movies", "anime"];
  if (!validCategories.includes(category)) {
    return res.status(400).json({
      message:
        "Invalid category. Valid categories are: electronics, movies, anime",
    });
  }

  try {
    const newProduct = products({
      title,
      price,
      description,
      category,
    });

    await newProduct.save();

    res.status(201).json({
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (e) {
    console.error("Error creating product:", e);
    res
      .status(500)
      .json({ message: "Something went wrong. Product not created." });
  }
});

/**
 *
 * Put /products
 * @description modify a product
 *
 */
router.put("/:id", async (req, res) => {
  try {
    const product = await products.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }
    res.status(200).json(product);
  } catch (e) {
    res.status(500).json({ message: "Error fetching the product", error: err });
  }
});

export default router;
