if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const bcrypt = require("bcrypt");
const flash = require("express-flash");
const passport = require("passport");
const { createClient } = require("@supabase/supabase-js");
const port = 3002;
const initializedPassport = require("./passport-config");
const supabase = createClient(
	"https://lekbkbafzntukffwtnpx.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMzk0NDg1OSwiZXhwIjoxOTM5NTIwODU5fQ.GZlazHQsVoxSF4Blz-Kh2I4TWnpRl9pmow0NpeAQpEM"
);
// const indexrouter = require("./routes/index")
const pool = require("./db.js");

//middleware
app.use(express.json());
app.use(cors());
app.use(flash());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(
	session({
		secret: "secret",
		resave: false,
		saveUninitialized: false,
	})
);
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
  console.log(validUser);
  return validUser;
}
async function getUserID(id) {
  const { data, error } = await supabase.from("Users").select();
  const validUserID = data.find((user) => user.id === id);
  console.log(validUserID);
  return validUserID;

}
initializedPassport(passport, getUserEmail, getUserID);
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
});
app.get("/signup", checkIfUserIsLoggedIn, (req, res) => {
  res.json("signup");
});

app.post("/signup", async (req, res) => {

  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const { data, error } = await supabase.from("Users").insert([
      {
        Username: req.body.Username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
      },
    ]);
    res.status(200).redirect("/");
  } catch (err) {
    res.status(401).redirect("/signup");
  }
  console.log(req.body);

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

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
