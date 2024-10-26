// Show all errors accumulated
function showErrors(errors){
  if(errors.length > 1) return `The fields '${errors}' are empties`;
  else return `The field '${errors}' is empty`
}

// Check if an order is valid: Has products, totalPrice, freight, completed fields and subfields of products (_id, quantity)
const validateOrder = async (req, res, next) => {
  let errors = [];
  const order = req.body;
  const products = order.products;

  if(!products) errors.push("products");
  if(products != undefined){
    products.map((product, index) =>{
      if(!product._id) errors.push(`${index+1}° product: _id`);
      if(!product.quantity) errors.push(`${index+1}° product: quantity`)
    })
  }

  if(!order.totalPrice) errors.push("totalPrice");
  if(!order.freight) errors.push("freight");
  if(order.completed == undefined) errors.push("completed");

  if(errors.length != 0){
    return res.status(400).send({message: showErrors(errors)});
  }

  return next();
}

module.exports = {validateOrder}
