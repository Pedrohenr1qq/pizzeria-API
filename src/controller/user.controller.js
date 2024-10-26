// Internal require
const userService = require('../service/user.service');

// User CRUD requests
// READ
const findUserById = async (req,res) =>{
  try {
    return res.send(await userService.findUserById(req.params.id));

  } catch (error) {
    if(error.kind == "ObjectId") return res.status(400).send({message: "Invalid ID"});

    console.log(`Error in find USER: ${error}`);
    return res.status(500).send({message: 'Internal error. Try again later.'});
  }
}

const findAllUsers = async (req,res) =>{
  try {
    return  res.send(await userService.findAllUsers(req.params.limit, req.params.offset));

  } catch (error) {
    console.log(`Error in find all USERS: ${error.message}`);
    return res.status(500).send({message: 'Internal error. Try again later.'});
  }
}

// CREATE
const createUser= async (req,res) =>{
  try {
    return res.status(201).send(await userService.createUser(req.body));

  } catch (error) {
    console.log(`Error in create USER: ${error.message}`);
    return res.status(500).send({message: 'Internal error. Try again later.'});
  }
}

// UPDATE
const updateUser= async (req,res) =>{
  try {
    res.send(await userService.updateUser(req.params.id, req.body));

  } catch (error) {
    console.log(`Error in update USER: ${error.message}`);
    return res.status(500).send({message: 'Internal error. Try again later.'});
  }
}

// DELETE
const deleteUser= async (req,res) =>{
  try {
    return res.send(await userService.deleteUser(req.params.id));

  } catch (error) {
    console.log(`Error in delete USER: ${error.message}`);
    return res.status(500).send({message: 'Internal error. Try again later.'});
  }
}

// Address requests
// CREATE
const addAddress= async (req,res) =>{
  try {
    const addressAdded = await userService.addAddress(req.params.id, req.body);

    if(addressAdded != null) return res.send({message: "User address added"});
    else return res.status(400).send({message: "Something is wrong. Try again"});

  } catch (error) {
    console.log(`Error in create USER address: ${error.message}`);
    return res.status(500).send({message: 'Internal error. Try again later.'});
  }
}
// DELETE
const removeAddress= async (req,res) =>{
  try {
    const addressId = req.body.addressId;
    let found = false;

    const userRemovedAddress = await userService.removeAddress(req.params.id, addressId);
    if(userRemovedAddress == null) return res.status(404).send({message: "User not found"});
      
    userRemovedAddress.addresses.map((address) => found = (address._id == addressId)); // If addressId is valid and exists, its possible to remove it

    if(found) return res.send({message: "User address removed"});
    else return res.status(400).send({message: "Address not found."});

  } catch (error) {
    console.log(`Error in delete USER address: ${error.message}`);
    return res.status(500).send({message: 'Internal error. Try again later.'});
  }
}

module.exports = {
  findUserById,
  findAllUsers,
  createUser,
  updateUser,
  deleteUser,
  addAddress,
  removeAddress
}