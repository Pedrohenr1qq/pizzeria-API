// Dependencies
const router = require('express').Router();

// Internal Requires
const productController = require('../controller/product.controller');
const authMiddleware = require('../middleware/auth.middleware');
const {validateProduct} = require('../middleware/product.middleware');

// Create routes
// GET
router.get('/findById/:id', authMiddleware, productController.findProductById);
router.get('/findAll', authMiddleware, productController.findAllProducts);

// POST
router.post('/create', authMiddleware, validateProduct, productController.createProduct);

// PUT
router.put('/update/:id', authMiddleware, validateProduct, productController.updateProduct);

// DELETE
router.delete('/delete/:id', authMiddleware, productController.deleteProduct);

module.exports = router;