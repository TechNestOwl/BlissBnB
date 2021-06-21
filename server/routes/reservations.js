var express = require("express");
var app = express.Router();
const models = require("../capstone-server/models");

app.get("/reservations", async (req, res) => {
  const reservation = await User.findAll();
  res.json(reservation);
});
