// Intenal require
const app = require('./index');

// Port at server will run
const port = 3000;

// Starting server
app.listen(port, ()=>{
  console.log(`Server running at http://localhost:${port}`);
})