// Show all errors accumulated
function showErrors(errors){
  if(errors.length > 1) return `The fields '${errors}' are empties`;
  else return `The field '${errors}' is empty`
}

// Check if a product is valid: Has name, description, size, unitPrice, image, category fields and sub-fields of category (_id)
const validateProduct = async (req, res, next) => {
  let errors = []
  const product = req.body;
  const productCategory =  product.category;

  if(!product.name) errors.push("name ");
  if(!product.description) errors.push("description ");
  if(!product.size) errors.push("size ");
  if(!product.unitPrice) errors.push("unitPrice ");
  if(!product.image) errors.push("image ");
  if(!productCategory) errors.push("category");

  if(productCategory != undefined) {
    if(!productCategory._id) errors.push("category ID");
  }

  if(errors.length != 0){
    return res.status(400).send({message: showErrors(errors)});
  }
  return next();
}

module.exports = {
  validateProduct
}