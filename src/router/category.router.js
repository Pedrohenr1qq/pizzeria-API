// Dependencies
const router = require('express').Router();

// Internal Requires
const categoryController = require('../controller/category.controller');
const authMiddleware = require('../middleware/auth.middleware');
const categoryValidate = require('../middleware/category.middleware');

// Create routes
// GET
router.get('/findById/:id', authMiddleware, categoryController.findCategoryById);
router.get('/findAll', authMiddleware, categoryController.findAllCategories);

// POST
router.post('/create', authMiddleware, categoryValidate, categoryController.createCategory);

// PUT
router.put('/update/:id', authMiddleware, categoryValidate, categoryController.updateCategory);

// DELETE
router.delete('/delete/:id', authMiddleware, categoryController.deleteCategory);


module.exports = router;