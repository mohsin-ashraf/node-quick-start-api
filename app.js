const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
// Init app
const app = express();

// Connecting to database.
mongoose.connect("mongodb://localhost:27017/quick-start-api", { useNewUrlParser: true }).then(() => {
  console.log("Connected to the database successfully");
}).catch(err => {
  console.log("Unable to connect to the databse.");
});

// body-parser middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

// morgan middleware
app.use(morgan('dev'));

// cors middleware
app.use(cors());

// Routes Imports
const indexRoute = require("./routes/index");

// Using Routes
app.use("/", indexRoute);

// Invalid Url or api end point.
app.use("*", (req, res) => {
  res.status(401).json({
    success: false,
    message: "Invalid api request"
  });
});

module.exports = app;