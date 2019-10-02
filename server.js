const express = require('express');
const sql = require('./db.js');

const app = express();

app.listen(3000, ()=>{
    console.log("server on port 3000");
});