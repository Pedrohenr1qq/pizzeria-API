// Dependencies
const mongoose = require('mongoose');

// Create an order schema
const orderSchema = new mongoose.Schema({
  products: [
    {
      _id: {type: mongoose.Schema.Types.ObjectId, required: true ,ref: "products"},
      quantity: {type: Number, required: true}
    }
  ],
  totalPrice: {type: Number, required: true},
  freight: {type: Number, required: true},
  userId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "users"},
  completed:  {type: Boolean, required: true},
  createdAt: {type: Date, required: true, default: Date.now()}
});

// Create an order model and collection to DB
const Order = mongoose.model('order', orderSchema);

module.exports = Order;