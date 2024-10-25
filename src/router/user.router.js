// Dependencies
const router = require('express').Router();

// Internal requires
const userController = require('../controller/user.controller');
const authMiddleware = require('../middleware/auth.middleware');
const {validateIdParams, validateAddressId} = require('../middleware/id.middleware');
const {validateUser, validateAddress} = require('../middleware/user.middlewate');

// Create routes
// GET
router.get('/findById/:id',authMiddleware, validateIdParams, userController.findUserById);
router.get('/findAll', authMiddleware, userController.findAllUsers);

// POST
router.post('/create', validateUser, userController.createUser);
router.post('/addAddress/:id', authMiddleware, validateIdParams, validateAddress, userController.addAddress);

// PUT
router.put('/update/:id', authMiddleware, validateIdParams, validateUser, userController.updateUser);

// DELETE
router.delete('/delete/:id', authMiddleware, validateIdParams, userController.deleteUser);
router.delete('/removeAddress/:id', authMiddleware, validateIdParams, validateAddressId, userController.removeAddress);

module.exports = router;