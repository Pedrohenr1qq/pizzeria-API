module.exports = async (req, res, next) =>{
  if(!req.body.name) return res.status(400).send({message: "name field is empty"});

  return next();
}