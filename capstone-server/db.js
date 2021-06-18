const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "",
  host: "localhost",
  port: 3002,
  database: "capstone_database",
});

module.exports = pool;
