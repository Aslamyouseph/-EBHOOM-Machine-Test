const express = require("express");
var createError = require("http-errors");
const cors = require("cors");
var path = require("path");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session"); //it is used for handing the session operations
const connectDB = require("./DB-configiration/DB-connection"); // import the connection file

// calling the connection function to connect to the database
connectDB();

const app = express();
const port = process.env.PORT || 5000; // This project is run on the port number 5000

// // Middleware
app.use(cors());
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.json({ message: "Hello, it's Aslam Youseph from the server side!" });
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
