var express = require("express");
var router = express.Router();
const sequelize = require("sequelize");
const { User } = require("./models");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
