const Product = require('../model/product.model');

const findProductById = (id) => Product.findById(id);

const findAllProducts = () => Product.find();

const createProduct = (newProduct) => Product.create(newProduct);

const updateProduct = (id, product) => Product.findByIdAndUpdate(id, product, {returnDocument: "after"});

const deleteProduct = (id) => Product.findByIdAndDelete(id);

const addCategoryToProduct = (productId, category) => {
  return Product.findOneAndUpdate(
    {
      _id: productId
    },
    {
      $push: {
        categories: {
          _id: category._id,
          createdAt: category.createdAt
        }
      }
    },
    {
      rawResults: true
    }
  );
}

const removeCategoryFromProduct = (productId, category) => {
  return Product.findOneAndUpdate(
    {
      _id: productId
    },
    {
      $pull: {
        categories: {
          _id: category._id
        }
      }
    },
    {
      rawResults: true
    }
  );
}

module.exports = {
  findProductById,
  findAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  addCategoryToProduct,
  removeCategoryFromProduct
}