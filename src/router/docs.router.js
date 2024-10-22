const router = require("express").Router();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

router.use('/api-routes', swaggerUi.serve);

router.get('/api-routes', swaggerUi.setup(swaggerDocument));

module.exports = router;