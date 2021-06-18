var express = require("express");
var app = express.Router();
const sequelize = require("sequelize");

/* GET home page. */
app.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = app;
