// Dependencies
const express = require('express');
require('dotenv').config(); // dotenv configs
const cors = require('cors'); 

// Internal Requires
const connectToDatabase = require('./src/database/database');

// Require Routers
const authRouter = require('./src/router/auth.router');
const userRouter = require('./src/router/user.router');
const categoryRouter = require('./src/router/category.router');
const productRouter = require('./src/router/product.router');
const orderRouter = require('./src/router/order.router');
const docsRouter = require('./src/router/docs.router');

// Starting database connection
connectToDatabase();

// Starting application
const app = express();
app.use(express.json());

// CORS config
app.use(cors({
  origin: 'https://localhost:3001', // IP authorized to acess this API
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"] // HTTP methods authorized
}));

//Create Routes
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/category', categoryRouter);
app.use('/product', productRouter);
app.use('/order', orderRouter);
app.use('/docs', docsRouter);


// Main route
app.get('/', (req,res) => {
  res.send("Home");
})

module.exports = app;