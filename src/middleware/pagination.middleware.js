// Check if has limit and offset params. If no, create it with default values
module.exports = (req, res, next) => {
  let {limit, offset} = req.query;
  
  //Check if they are valids
  limit = Number(limit);
  offset = Number(offset);

  //If they not exists, create it. Else, do nothing
  !limit ? limit = 10 : null; 
  !offset ? offset = 0: null;

  req.query.limit = limit; 
  req.query.offset = offset;

  return next();
}