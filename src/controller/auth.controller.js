// Dependencies
const bcrypt = require('bcrypt');

// Internal Requires
const authService = require('../service/auth.service');

// Check if the email and password provided are valids. It's true, generates a valid token to user
const userLogin = async (req, res) => {
  try {
    const {email, password} = req.body;

    // Check if the email exists in DB
    const user=  await authService.loginService(email);
    if(!user) res.status(404).send({message: "User not found"});
  
    // Check if the password is valid
    const isPasswordValid = bcrypt.compare(password, user.password);
    if(!isPasswordValid) return res.stauts(401).send({message: "Invalid login"});
  
    // Generates a token
    const token = authService.generateToken(user.id);
  
    res.send({
      email,
      token
    });
  } catch (err) {
    console.log(`Error in AUTH controller: ${err.message}`);
    return res.status(500).send({message: 'Internal error. Try again later.'});  
  }
}

module.exports = {userLogin};