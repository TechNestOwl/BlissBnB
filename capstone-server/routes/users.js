const express = require("express");

const app = express.Router();

/* GET users listing. */
app.get("/users", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = app;
