// Dependenceis
const router = require("express").Router();
const swaggerUi = require('swagger-ui-express');

// Internal requires
const swaggerDocument = require('../../swagger.json');

// Create the route to swagger document
router.use('/api-routes', swaggerUi.serve);

// Link and setup the swagger document in the route '/docs/api-routes'
router.get('/api-routes', swaggerUi.setup(swaggerDocument));

module.exports = router;