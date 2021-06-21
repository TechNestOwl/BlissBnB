const express = require("express");
const app = express();
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");
const port = 3002;
const supabase = createClient(
  "https://lekbkbafzntukffwtnpx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMzk0NDg1OSwiZXhwIjoxOTM5NTIwODU5fQ.GZlazHQsVoxSF4Blz-Kh2I4TWnpRl9pmow0NpeAQpEM"
);
const pool = require("./db.js");

//middleware
app.use(express.json());
app.use(cors());

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

// checking user authentication

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

function checkIfUserIsLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
}

//login page

app.get("/login", checkIfUserIsLoggedIn, (req, res) => {
  res.render("login");
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

//register page

app.get("/register", checkIfUserIsLoggedIn, (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
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
    res.status(200).redirect("/login");
  } catch (err) {
    res.status(401).redirect("/register");
  }
});

// log out

app.post("/logout", (req, res) => {
  req.logOut();
  res.redirect("/login");
});

app.get("/logout", (req, res) => {
  req.logOut();
  res.render("login");
});

// homepage

app.get("/", checkAuthenticated, async (req, res) => {
  const { data, error } = await supabase.from("Homes").select();
  res.render("home", { locals: { homes: data } });
});

//reservations page
app.get("/reservations", checkAuthenticated, async (req, res) => {
  const { data, error } = await supabase.from("Reservations").select();
  res.render("reservations", { locals: { reservations: data } });
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
