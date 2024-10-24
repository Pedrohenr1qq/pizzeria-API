const mongoose= require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true},
  createdAt: {type: Date, required: true, default: Date.now()}
});

const Category = mongoose.model("categories", categorySchema);

module.exports = Category; 