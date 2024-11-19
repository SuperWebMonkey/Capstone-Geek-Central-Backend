import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be a positive number"],
  },
  description: { type: String, required: true },
  category: {
    type: String,
    required: true,
    enum: ["electronics", "movies", "anime"],
  },
});

productSchema.index({ title: 1 });
productSchema.index({ price: 1 });
productSchema.index({ description: 1 });
productSchema.index({ category: 1 });

productSchema.methods.getItems = function (obj) {
  return mongoose.model("Products").find({ title: this.title }, obj);
};

const Products = mongoose.model("Products", productSchema);

export default Products;
