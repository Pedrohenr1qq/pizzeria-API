// Dependencies
const router = require('express').Router();

// Internal Requires
const orderController = require('../controller/order.controller');
const authMiddleware = require('../middleware/auth.middleware');
const {validateIdParams} = require('../middleware/id.middleware');
const {validateOrder} = require('../middleware/order.middleware');
const pagination = require('../middleware/pagination.middleware');

// Create routes
// GET
router.get('/findById/:id', authMiddleware, validateIdParams, orderController.findOrderById);
router.get('/findAll', authMiddleware, pagination, orderController.findAllOrders);

// POST
router.post('/create', authMiddleware, validateOrder, orderController.createOrder);

// PATCH
router.patch('/updateStatus/:id', authMiddleware, validateIdParams, orderController.updateStatusOrder);

// DELETE
router.delete('/delete/:id', authMiddleware, validateIdParams, orderController.deleteOrder);

module.exports = router;