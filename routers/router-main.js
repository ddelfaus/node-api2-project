const express = require("express");

const db = require("../data/db")

const router = express.Router();


router.use(express.json())





//get request

router.get("/", (req, res) => {

    console.log(req.query);
    db.find(req.query)
      .then(db => {
        res.status(200).json(db);
      })
      .catch(error => {
        // log error to database
        console.log(error);
        res.status(500).json({
          message: "Error retrieving the db"
        });
      });
  });
  




//post request

router.post("/", (req, res) => {
    const {title, contents} = req.body

    if(!title && !contents){
        res.status(400).json({error: "Please provide title and contents for the post."})
    }

    db
    .insert({title,contents})
    .then(id => {
        res.status(201).json({message:`title: ${title} Contents: ${contents}`})
      })
      .catch(error => {
        // log error to database
        console.log(error);
        res.status(500).json({
          message: "Error adding the message"
        });
      });
  });


  router.post("/:id/comments", (req, res) => {
    const {text, post_id} = req.body

    if(!text && !post_id){
        res.status(400).json({error: "Please provide text and post_id for the post."})
    }

    db
    .insertComment(req.body)
    .then(message => {
        res.status(201).json({message:`text: ${text} post_id: ${post_id}`});
      })
      .catch(error => {
        // log error to database
        console.log(error);
        res.status(500).json({
          message: "Error adding the message"
        });
      });
  });


  

  

  module.exports = router