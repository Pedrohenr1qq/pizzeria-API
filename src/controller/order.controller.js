// Internal Requires
const orderService = require('../service/order.service');

// Order requests
// READ
const findOrderById = async (req, res) => {
  try {
    const order = await orderService.findOrderById(req.params.id);
    if(order == null) return res.status(404).send({message: "Order not found"});
    else return res.send(order);

  } catch (err) {
    console.log(`Error in find ORDER by id: ${err.message}`);
    res.status(500).send({message: "Internal error. Try again later"});
  }
}

const findAllOrders = async (req, res) => {
  try {
    res.send(await orderService.findAllOrders(req.query.limit, req.query.offset));

  } catch (err) {
    console.log(`Error in find all ORDERS: ${err.message}`);
    res.status(500).send({message: "Internal error. Try again later"});
  }
}

// CREATE
const createOrder = async (req, res) => {
  try {
    const newOrder = {
      ...req.body,
      userId: req.userId, // link the order to the user who acessed the API
    }

    res.status(201).send(await orderService.createOrder(newOrder));

  } catch (err) {
    console.log(`Error in create a new ORDER: ${err.message}`);
    res.status(500).send({message: "Internal error. Try again later"});
  }
}

//DELETE
const deleteOrder = async (req, res) => {
  try {
    const order = await orderService.deleteOrder(req.params.id);
    if(order == null) return res.status(404).send({message: "Order not found"});
    else return res.send(order);

  } catch (err) {
    console.log(`Error in delete a ORDER: ${err.message}`);
    res.status(500).send({message: "Internal error. Try again later"});
  }
}

// UPDATE 
const updateStatusOrder = async (req, res) => {
  try {
    const order = await orderService.updateStatusOrder(req.params.id);
    if(order == null) return res.status(404).send({message: "Order not found"});
    else return res.send(order);
    
  } catch (err) {
    console.log(`Error in delete a ORDER: ${err.message}`);
    res.status(500).send({message: "Internal error. Try again later"});
  }
}

module.exports = {
  findOrderById,
  findAllOrders,
  createOrder,
  deleteOrder,
  updateStatusOrder
}