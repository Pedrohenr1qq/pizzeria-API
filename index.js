// Dependencies
const express = require('express');

require('dotenv').config();

// Internal Requires
const connectToDatabase = require('./src/database/database');

// Require Routers
const authRouter = require('./src/router/auth.router');
const userRouter = require('./src/router/user.router');
const categoryRouter = require('./src/router/category.router');
const productRouter = require('./src/router/product.router');
const docsRouter = require('./src/router/docs.router');

// Starting database connection
connectToDatabase();

// Starting application
const app = express();
app.use(express.json());

//Create Routes
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/category', categoryRouter);
app.use('/product', productRouter);
app.use('/docs', docsRouter);


// Main route
app.get('/', (req,res) => {
  res.send("Home");
})

module.exports = app;