const express = require("express");

const routerMain = require("../routers/router-main.js")

const server = express();

server.get("/", (req, res) => {
  res.send(`
    <h2>Project 2</h>
  
  `);
});


server.use("/api/posts", routerMain)

module.exports = server; 
