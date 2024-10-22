// Dependencies
const express = require('express');

require('dotenv').config();

// Internal Requires
const connectToDatabase = require('./src/database/database');

// Require Routers

// Starting database connection
connectToDatabase();

// Starting application
const app = express();

app.use(express.json(
));


//Create Routes


// Main route
app.get('/', (req,res) => {
  res.send("Home");
})

module.exports = app;