// Internal Requires
const Product = require('../model/product.model');

// Product DB consult
// READ product
const findProductById = (id) => Product.findById(id);
const findAllProducts = () => Product.find();

// CREATE product
const createProduct = (newProduct) => Product.create(newProduct);

// UPDATE product
const updateProduct = (id, product) => Product.findByIdAndUpdate(id, product, {returnDocument: "after"});

// DELETE product
const deleteProduct = (id) => Product.findByIdAndDelete(id);

module.exports = {
  findProductById,
  findAllProducts,
  createProduct,
  updateProduct,
  deleteProduct
}