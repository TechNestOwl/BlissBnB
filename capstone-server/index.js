const express = require("express");
const app = express();
const cors = require("cors");

const bcrypt = require("bcrypt");

const passport = require("passport");
const { createClient } = require("@supabase/supabase-js");
const port = 3002;
// const initializedPassport = require("./passport-config");
const supabase = createClient(
  "https://lekbkbafzntukffwtnpx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMzk0NDg1OSwiZXhwIjoxOTM5NTIwODU5fQ.GZlazHQsVoxSF4Blz-Kh2I4TWnpRl9pmow0NpeAQpEM"
);
const pool = require("./db.js");

//middleware
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("Welcome to node server");
});

app.get("/homes", async (req, res) => {
  try {
    const { data, error } = await supabase.from("Homes").select();
    res.send(data);
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/users", async (req, res) => {
  try {
    const { data, error } = await supabase.from("Users").select();
    res.send(data);
  } catch (err) {
    console.log(err.message);
  }
});

// locate user information and matching to DB

async function getUserEmail(email) {
  const { data, error } = await supabase.from("Users").select();
  const validUser = data.find((user) => user.Email === email);
  return validUser;
}
async function getUserID(id) {
  const { data, error } = await supabase.from("Users").select();
  const validUserID = data.find((user) => user.id === id);
  return validUserID;
}
// initializedPassport(passport, getUser, getUserID);
// checking user authentication

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/signin");
}

function checkIfUserIsLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
}

//signin page


app.get("/signin", checkIfUserIsLoggedIn, (req, res) => {
  res.json("signin");


});

app.post(
  "/signin",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/signin",
    failureFlash: true,
  })
);

//register page


app.get("/", checkIfUserIsLoggedIn, (req, res) => {
  res.json("signup");

app.get("/register", checkIfUserIsLoggedIn, (req, res) => {
  res.json("register");

});

app.post("/signup", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const { data, error } = await supabase.from("User").insert([
      {
        Name: req.body.Name,
        Email: req.body.email,
        Password: hashedPassword,
      },
    ]);
    res.status(200).redirect("/signin");
  } catch (err) {
    res.status(401).redirect("/signup");
  }
});

// log out

app.post("/logout", (req, res) => {
  req.logOut();
  res.redirect("/login");
});

app.get("/logout", (req, res) => {
  req.logOut();
  res.json("login");
});

// homepage

app.get("/", checkAuthenticated, async (req, res) => {
  const { data, error } = await supabase.from("Homes").select();
  res.json("home", { locals: { homes: data } });
});

//reservations page
app.get("/reservations", checkAuthenticated, async (req, res) => {
  const { data, error } = await supabase.from("Reservations").select();
  res.json("reservations", { locals: { reservations: data } });
});

app.post("/reservations", async (req, res) => {
  try {
    const { data, error } = await supabase.from("Reservations").insert([
      {
        UserId: req.body.userid,
        CheckIn: req.body.checkin,
        CheckOut: req.body.checkout,
        Guests: req.body.guests,
        HomeId: req.body.homeid,
      },
    ]);
    console.log(data);
    res.status(200).send(Ok);
  } catch (err) {
    res.status(401).send(Bad);
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
