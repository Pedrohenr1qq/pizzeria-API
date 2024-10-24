const Product = require('../model/product.model');

const findProductById = (id) => Product.findById(id);

const findAllProducts = () => Product.find();

const createProduct = (newProduct) => Product.create(newProduct);

const updateProduct = (id, product) => Product.findByIdAndUpdate(id, product, {returnDocument: "after"});

const deleteProduct = (id) => Product.findByIdAndDelete(id);

module.exports = {
  findProductById,
  findAllProducts,
  createProduct,
  updateProduct,
  deleteProduct
}