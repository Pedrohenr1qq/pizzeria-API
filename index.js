// Dependencies
const express = require('express');

require('dotenv').config();

// Internal Requires
const connectToDatabase = require('./src/database/database');

// Require Routers
const userRouter = require('./src/router/user.router');

// Starting database connection
connectToDatabase();

// Starting application
const app = express();
app.use(express.json());

//Create Routes
app.use('/user', userRouter);

// Main route
app.get('/', (req,res) => {
  res.send("Home");
})

module.exports = app;