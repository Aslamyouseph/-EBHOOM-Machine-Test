const express = require("express");
var createError = require("http-errors");
const cors = require("cors");
var path = require("path");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session"); //it is used for handing the session operations
const connectDB = require("./DB-configiration/DB-connection"); // import the connection file
const UserRouter = require("./routes/userRoutes");

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

app.use("/api/user", UserRouter); // user routes

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404, "Not Found"));
});
// Error handler middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});
