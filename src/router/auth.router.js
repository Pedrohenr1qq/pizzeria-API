// Dependencies
const router = require('express').Router();

// Internal Requires
const authController = require('../controller/auth.controller');

// POST route
router.post('/login', authController.userLogin);

module.exports = router;