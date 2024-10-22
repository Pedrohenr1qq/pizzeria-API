const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose.connect(process.env.URL_DATABASE)
  .then(() => console.log("DATABASE CONNECTED"))
  .catch((err) => console.log(`Error in DATABASE connection: ${err}`));
};

module.exports = connectToDatabase;