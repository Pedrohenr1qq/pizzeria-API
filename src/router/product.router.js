// Dependencies
const router = require('express').Router();

// Internal Requires
const productController = require('../controller/product.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Create routes
// GET
router.get('/findById/:id', authMiddleware, productController.findProductById);
router.get('/findAll', authMiddleware, productController.findAllProducts);

// POST
router.post('/create', authMiddleware, productController.createProduct);
router.post('/addCategory/:id', authMiddleware, productController.addCategoryToProduct);

// PUT
router.put('/update/:id', authMiddleware, productController.updateProduct);

// DELETE
router.delete('/delete/:id', authMiddleware, productController.deleteProduct);
router.delete('/removeCategory/:id', authMiddleware, productController.removeCategoryFromProduct);

module.exports = router;