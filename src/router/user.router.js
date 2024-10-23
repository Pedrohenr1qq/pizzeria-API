// Dependencies
const router = require('express').Router();

// Internal requires
const userController = require('../controller/user.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Create routes
// GET
router.get('/findById/:id',authMiddleware, userController.findUserById);
router.get('/findAll', authMiddleware, userController.findAllUsers);

// POST
router.post('/create', userController.createUser);
router.post('/addAddress/:id', authMiddleware, userController.addAddress);

// PUT
router.put('/update/:id', authMiddleware, userController.updateUser);

// DELETE
router.delete('/delete/:id', authMiddleware, userController.deleteUser);
router.delete('/removeAddress/:id', authMiddleware, userController.removeAddress);

module.exports = router;