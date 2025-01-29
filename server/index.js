const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000; // This project is run on the port number 5000

// // Middleware
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello, it's Aslam Youseph from the server side!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
