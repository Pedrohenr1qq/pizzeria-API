// Dependencies
const jwt = require('jsonwebtoken');

// Internal Requires
const User = require('../model/user.model');

// Find user by email
const loginService = (email) => User.findOne({email: email});

// Create a valid token to acess routes
const generateToken = (userId) => jwt.sign({id: userId}, process.env.SECRET_KEY, {expiresIn: 86400}); //86400s == 1 day

module.exports = {
  loginService, 
  generateToken
}
