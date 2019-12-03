const express = require("express");


const server = express();

server.get("/", (req, res) => {
  res.send(`
    <h2>Project 2</h>
  
  `);
});



module.exports = server; 
