var express = require("express");

var burger = require('../models/burger.js');

var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/burgers", function(req, res) {
    console.log(req.body)
    burger.insertOne(["burger_name"], [req.body.burger_name], function(result) {
      res.redirect('/');
    });
  });

  router.get("/burgers/:id", function(req, res) {
    var id = req.params.id;
  
    burger.updateOne(id,
      function(result) {
        res.redirect('/');
      }
    );
  });

module.exports = router;