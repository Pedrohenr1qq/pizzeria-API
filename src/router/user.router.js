// Dependencies
const router = require('express').Router();

// Internal requires
const userController = require('../controller/user.controller');
const authMiddleware = require('../middleware/auth.middleware');
const {validateUser, validateAddress, validateAddressId} = require('../middleware/user.middlewate');

// Create routes
// GET
router.get('/findById/:id',authMiddleware, userController.findUserById);
router.get('/findAll', authMiddleware, userController.findAllUsers);

// POST
router.post('/create' , validateUser, userController.createUser);
router.post('/addAddress/:id', authMiddleware, validateAddress, userController.addAddress);

// PUT
router.put('/update/:id', authMiddleware, validateUser, userController.updateUser);

// DELETE
router.delete('/delete/:id', authMiddleware, userController.deleteUser);
router.delete('/removeAddress/:id', authMiddleware, validateAddressId, userController.removeAddress);

module.exports = router;