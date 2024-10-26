// Internal Requires
const Category = require('../model/category.model');

// CATEGORY DB consult
// READ category
const findCategoryById = (id) => Category.findById(id);
const findAllCategories = () => Category.find();

// CREATE category
const createCategory = (newCategory) => Category.create(newCategory);

// UPDATE category
const updateCategory = (id,category) => Category.findByIdAndUpdate(id, category, {returnDocument: "after"});

// DELETE category
const deleteCategory = (id) => Category.findByIdAndDelete(id);

module.exports = {
  findCategoryById,
  findAllCategories,
  createCategory,
  updateCategory,
  deleteCategory
}