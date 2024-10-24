// Dependencies
const router = require('express').Router();

// Internal Requires
const orderController = require('../controller/order.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Create routes
// GET
router.get('/findById/:id', authMiddleware, orderController.findOrderById);
router.get('/findAll', authMiddleware, orderController.findAllOrders);

// POST
router.post('/create', authMiddleware, orderController.createOrder);

// PATCH
router.patch('/updateStatus/:id', authMiddleware, orderController.updateStatusOrder);

// DELETE
router.delete('/delete/:id', authMiddleware, orderController.deleteOrder);

module.exports = router;