// Middleware for validate a user

// Dependencies
const ObjectId = require('mongoose').Types.ObjectId;

// Show all errors accumulated
function showErrors(errors){
  if(errors.length > 1) return `The fields '${errors}' are empties`;
  else return `The field '${errors}' is empty`
}

// Check if an user request is body: Has name, email, password and admin fields
const validateUser = (req, res, next) => {
  let errors = [];
  const user = req.body;

  if(!user.name) errors.push('name');
  if(!user.email) errors.push('email');
  if(!user.password) errors.push('password');
  if(user.admin == undefined) errors.push('admin');

  if(errors.length != 0){
    return res.status(400).send({message: showErrors(errors)});
  }

  return next();
}

// Check if an user address is valid: Has street, number and CEP fields
const validateAddress = (req, res, next) => {
  let errors = [];
  const addresses = req.body;

  addresses.map((address, index) => {
    if(!address.street) errors.push(`${index+1}º address - street`);
    if(!address.number) errors.push(`${index+1}º address - number`);
    if(!address.CEP) errors.push(`${index+1}º address - CEP'`);
  })

  if(errors.length != 0){
    return res.status(400).send({message: showErrors(errors)});
  }

  return next();
}

module.exports = {
  validateUser,
  validateAddress
}