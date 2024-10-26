// Dependencies
const ObjectId = require('mongoose').Types.ObjectId;

// Check if a parameter ID is valid: Its in mongoose objectId type
const validateIdParams = async (req, res, next) => {
  const id = req.params.id;
  if(!id) return res.status(400).send({message:"ID field is empty"});
  if(!ObjectId.isValid(id)) return res.status(400).send({message:"Invalid ID (params)"});

  return next();
}

// Check if a product category ID is valid: Its in mongoose objectId type
const validateProductCaregoryId = async(req, res, next) => {
  const productCategoryId = req.body.category._id;
  if(!productCategoryId) return res.status(400).send({message: "product category ID field is empty"})
  if(!ObjectId.isValid(productCategoryId)) return res.status(400).send({message: "Invalid product category ID"})

  return next();
}

// Check if an address ID is valid: Its in mongoose objectId type
const validateAddressId = async (req, res, next) => {
  const addressId = req.body.addressId;
  if(!addressId) return res.status(400).send({message: "address ID field is empty"})
  if(!ObjectId.isValid(addressId)) return res.status(400).send({message: "Invalid address ID"})

  return next();
}

module.exports = {
  validateIdParams,
  validateProductCaregoryId,
  validateAddressId
}