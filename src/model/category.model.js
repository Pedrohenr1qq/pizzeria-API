// Dependencies
const mongoose= require('mongoose');

// Create a category schema
const categorySchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true},
  createdAt: {type: Date, required: true, default: Date.now()}
});

// Create a category model and collection to DB
const Category = mongoose.model("categories", categorySchema);

module.exports = Category; 