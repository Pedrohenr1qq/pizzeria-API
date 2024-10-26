// Intenal Requires
const Order = require('../model/order.model');

// Order DB consults
// READ order
const findOrderById = (id) => Order.findById(id);
const findAllOrders = () => Order.find();

// CREATE order
const createOrder = (newOrder) => Order.create(newOrder);

// DELETE order
const deleteOrder = (id) => Order.findByIdAndDelete(id);

// UPDATE order status --> set completed field to true
const updateStatusOrder = (id) => {
  return Order.findOneAndUpdate(
    {
      _id: id
    },
    {
      $set: {completed: true}
    },
    {
      returnDocument: "after"
    }
  );
}

module.exports = {
  findOrderById,
  findAllOrders,
  createOrder,
  deleteOrder,
  updateStatusOrder
}