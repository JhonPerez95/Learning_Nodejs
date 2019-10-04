const express = require('express');
const bodyParser = require('body-parser');
const sql = require('./db.js');
const Routes = require('./routes'); 
const app = express();


// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));

// Settings routes
//app.use(require('./routes/users'));
app.use(Routes);

// Strar Server
app.listen(3000, ()=>{
    console.log("server on port 3000");
});