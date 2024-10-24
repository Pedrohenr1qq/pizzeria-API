const authService = require('../service/auth.service');
const bcrypt = require('bcrypt');

const userLogin = async (req, res) => {
  try {
    const {email, password} = req.body;

    const user=  await authService.loginService(email);
    if(!user) res.status(404).send({message: "User not found"});
  
    const isPasswordValid = bcrypt.compare(password, user.password);
    if(!isPasswordValid) return res.stauts(401).send({message: "Invalid login"});
  
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