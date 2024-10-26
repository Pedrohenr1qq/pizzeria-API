// Dependencies
const router = require('express').Router();

// Internal Requires
const productController = require('../controller/product.controller');
const authMiddleware = require('../middleware/auth.middleware');
const {validateIdParams, validateProductCaregoryId} = require('../middleware/id.middleware');
const {validateProduct} = require('../middleware/product.middleware');
const pagination = require('../middleware/pagination.middleware');

// Create routes
// GET
router.get('/findById/:id', authMiddleware, validateIdParams, productController.findProductById);
router.get('/findAll', authMiddleware, pagination, productController.findAllProducts);

// POST
router.post('/create', authMiddleware, validateProduct, validateProductCaregoryId, productController.createProduct);

// PUT
router.put('/update/:id', authMiddleware, validateIdParams, validateProduct, validateProductCaregoryId, productController.updateProduct);

// DELETE
router.delete('/delete/:id', authMiddleware, validateIdParams, productController.deleteProduct);

module.exports = router;