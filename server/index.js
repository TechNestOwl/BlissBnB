// Get Tools
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Server Routes
app.listen(3000, () => {
	console.log("Server has started on port 3000");
});
