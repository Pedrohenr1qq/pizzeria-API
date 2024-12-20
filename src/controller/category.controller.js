// Internal Requires
const categoryService = require('../service/category.service');

// Category CRUD requests
// READ
const findCategoryById = async (req,res) => {
  try {
    const category = await categoryService.findCategoryById(req.params.id);
    if(category == null) return res.status(404).send({message: "category not found"});
    else return res.send(category);

  } catch (err) {
    console.log(`Error in find CATEGORY by id: ${err.message}`);
    res.status(500).send({message: "Internal error. Try again later"});
  }
}

const findAllCategories = async (req,res) => {
  try {
    res.send(await categoryService.findAllCategories(req.params.limit, req.params.offset));

  } catch (err) {
    console.log(`Error in find all CATEGORIES: ${err.message}`);
    res.status(500).send({message: "Internal error. Try again later"});
  }
}

// CREATE
const createCategory = async (req,res) => {
  try {
    res.status(201).send(await categoryService.createCategory(req.body));

  } catch (err) {
    console.log(`Error in create CATEGORY: ${err.message}`);
    res.status(500).send({message: "Internal error. Try again later"});
  }
}

// UPDATE
const updateCategory = async (req,res) => {
  try {
    const category = await categoryService.updateCategory(req.params.id, req.body)
    if(category == null) return res.status(404).send({message: "category not found"});
    else return res.send(category);

  } catch (err) {
    console.log(`Error in update CATEGORY: ${err.message}`);
    res.status(500).send({message: "Internal error. Try again later"});
  }
}

// DELETE
const deleteCategory = async (req,res) => {
  try {
    const category = await categoryService.deleteCategory(req.params.id);
    if(category == null) return res.status(404).send({message: "category not found"});
    else return res.send(category);
    
  } catch (err) {
    console.log(`Error in delete CATEGORY: ${err.message}`);
    res.status(500).send({message: "Internal error. Try again later"});
  }
}


module.exports = {
  findCategoryById,
  findAllCategories,
  createCategory,
  updateCategory,
  deleteCategory
}