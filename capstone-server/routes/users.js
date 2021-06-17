var express = require("express");
var app = express.Router();
const models = require("../models");
/* GET users listing. */
app.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// Creating a User
app.post(
  "/users",
  async (req, res) => {
    const { firstName, lastName, email, password } = await User.create({
      firstName,
      lastName,
      email,
      password,
    });

    //sending back user's ID in the response.
    res.json({
      id: newUser.id,
    });
  },

  app.get("/users", async (req, res) => {
    const users = await User.findAll();
    res.json(users);
  })
);
module.exports = app;
