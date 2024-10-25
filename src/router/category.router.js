// Dependencies
const router = require('express').Router();

// Internal Requires
const categoryController = require('../controller/category.controller');
const authMiddleware = require('../middleware/auth.middleware');
const {validateIdParams} = require('../middleware/id.middleware');
const categoryValidate = require('../middleware/category.middleware');

// Create routes
// GET
router.get('/findById/:id', authMiddleware, validateIdParams, categoryController.findCategoryById);
router.get('/findAll', authMiddleware, categoryController.findAllCategories);

// POST
router.post('/create', authMiddleware, categoryValidate, categoryController.createCategory);

// PUT
router.put('/update/:id', authMiddleware, validateIdParams, categoryValidate, categoryController.updateCategory);

// DELETE
router.delete('/delete/:id', authMiddleware, validateIdParams, categoryController.deleteCategory);


module.exports = router;