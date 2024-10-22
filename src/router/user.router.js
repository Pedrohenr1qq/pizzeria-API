// Dependencies
const router = require('express').Router();

// Internal requires
const userController = require('../controller/user.controller');

// Create routes
// GET
router.get('/findById/:id', userController.findUserById);
router.get('/findAll', userController.findAllUsers);

// POST
router.post('/create', userController.createUser);
router.post('/addAddress/:id', userController.addAddress);

// PUT
router.put('/update/:id', userController.updateUser);

// DELETE
router.delete('/delete/:id', userController.deleteUser);
router.delete('/removeAddress/:id', userController.removeAddress);

module.exports = router;