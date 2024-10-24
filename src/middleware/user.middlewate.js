// Middleware for validate a user

// Dependencies
const ObjectId = require('mongoose').Types.ObjectId;

function showErrors(errors){
  if(errors.length > 1) return `The fields '${errors}' are empties`;
  else return `The field '${errors}' is empty`
}

const validateUser = (req, res, next) => {
  let errors = [];
  const user = req.body;

  if(!user.name) errors.push('name');
  if(!user.email) errors.push('email');
  if(!user.password) errors.push('password');
  if(!user.image) errors.push('image');
  if(user.admin == undefined) errors.push('admin');

  if(errors.length != 0){
    return res.status(400).send({message: showErrors(errors)});
  }

  return next();
}

const validateAddress = (req, res, next) => {
  let errors = [];
  const addresses = req.body;

  addresses.map((address, index) => {
    console.log(address);
    if(!address.street) errors.push(`${index+1}º address - street`);
    if(!address.number) errors.push(`${index+1}º address - number`);
    if(!address.CEP) errors.push(`${index+1}º address - CEP'`);
  })

  if(errors.length != 0){
    return res.status(400).send({message: showErrors(errors)});
  }

  return next();
}

const validateAddressId = (req, res, next) => {
  const addressId = req.body;
  if(!addressId) return res.status(404).send({message: "User not found"}); 
  if(!ObjectId.isValid(addressId)) return res.status(400).send({message: "Invalid address ID"})

  return next();
}


module.exports = {
  validateUser,
  validateAddress,
  validateAddressId
}