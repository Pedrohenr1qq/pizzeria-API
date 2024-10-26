// Dependencies
const mongoose = require('mongoose');

// Create a product schema
const productSchema = new mongoose.Schema({
  name: {type: String, unique: true, required: true},
  description: {type: String, required: true},
  size: {type: String, required: true},
  unitPrice: {type: Number, required: true},
  image: {type: String, required: true},
  category:
    {
      _id: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "categories"},
      createdAt: {type: Date, required: true, default: Date.now()}
    },
    createdAt: {type: Date, required: true, default: Date.now()}
})

// Create a product model and collection to DB
const Product = mongoose.model("products", productSchema);

module.exports = Product;
