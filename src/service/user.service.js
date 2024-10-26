// Internal requires
const User = require('../model/user.model');

// User consult DB
// READ user
const findUserById = (id) => User.findById(id);

const findAllUsers = () => User.find();

// CREATE user
const createUser = (newUser) => User.create(newUser);

// UPDATE user
const updateUser = (id, updatedUser) => User.findByIdAndUpdate(id, updatedUser, {returnDocument: "after"});

// DELETE user
const deleteUser = (id) => User.findByIdAndDelete(id);

// CREATE address
const addAddress = (id, address) => {
  return User.findOneAndUpdate(
    {
      _id: id
    }, 
    {
      $push: {
        addresses: address
      }
    }, {
      rawResults: true
    });
}

// DELETE adress
const removeAddress = (id, addressId) => {
  return User.findOneAndUpdate(
    {
      _id: id
    },
    {
      $pull:{
        addresses: {
          _id: addressId
        }
      }
    },
    {
      rawResults: true
    }
  );
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