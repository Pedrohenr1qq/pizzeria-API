const Category = require('../model/category.model');

const findCategoryById = (id) => Category.findById(id);

const findAllCategories = () => Category.find();

const createCategory = (newCategory) => Category.create(newCategory);

const updateCategory = (id,category) => Category.findByIdAndUpdate(id, category, {returnDocument: "after"});

const deleteCategory = (id) => Category.findByIdAndDelete(id);

module.exports = {
  findCategoryById,
  findAllCategories,
  createCategory,
  updateCategory,
  deleteCategory
}