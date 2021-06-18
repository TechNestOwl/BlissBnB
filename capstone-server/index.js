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

// app.get("/users", async (req, res) => {
//   try {
//     const getUsers = await pool.query("SELECT * from Users");
//     res.json(getUsers.rows);
//   } catch (err) {
//     console.log(err.message);
//   }
// });

// app.get("/users/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const getUsersID = await pool.query("SELECT * from Users", [id]);
//     res.json(getUsersID.rows);
//   } catch (err) {
//     console.log(err.message);
//   }
// });

// app.post("/add_address", async (req, res) => {
//   try {
//     const { first_name, last_name, addresses, phone_number } = req.body;
//     const getAddresses = await pool.query(
//       "INSERT INTO addresses (first_name,last_name,addresses,phone_number) VALUES($1,$2,$3,$4)",
//       [first_name, last_name, addresses, phone_number]
//     );
//     res.json(getAddresses.rows);
//   } catch (err) {
//     console.log(err.message);
//   }
// });

// app.post("/edit_address/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { first_name, last_name, addresses, phone_number } = req.body;
//     const updateAddresse = await pool.query(
//       "UPDATE addresses SET(first_name,last_name,addresses,phone_number) = ($1,$2,$3,$4) WHERE add_id = $5",
//       [first_name, last_name, addresses, phone_number, id]
//     );
//     res.json("updated");
//   } catch (err) {
//     console.log(err.message);
//   }
// });

// app.post("/delete_address/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const updateAddresse = await pool.query(
//       "DELETE FROM addresses WHERE add_id = $1",
//       [id]
//     );
//     res.json("Deleted");
//   } catch (err) {
//     console.log(err.message);
//   }
// });

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
