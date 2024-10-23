const jwt = require('jsonwebtoken');
const {findUserById} = require('../service/user.service');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if(!authHeader) return res.status(401).send({message: "Token field is empty"});

  const parts = authHeader.split(" "); //parts = ["Bearer", <token>];
  
  if(parts.length != 2) {
    console.log('Invalid token -- parts');
    return res.status(401).send({message: "Login invalid"});
  }

  const [schema, token] = parts;

  if(!/^Bearer/i.test(schema)) {
    console.log('Malformatted token');
    return res.status(401).send({message: "Login invalid"});
  }

  jwt.verify(token, process.env.SECRET_KEY, async(err, decoded) => {
      if(err) {
        console.log(`Error in validate token: ${err}`);
        return res.status(500).send({message: "Internal Error. Trye again later."});
      }

      const user = await findUserById(decoded.id);

      if(!user || !user.id) {
        console.log('Invalid token');
        return res.status(401).send({message: "Login invalid"});
      }

      req.userId = decoded.id;  

      return next();
    })
}