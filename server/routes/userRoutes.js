const express = require("express");
const router = express.Router();
const userHelpers = require("../helpers/userHelpers"); // Accessing user-helpers file

// Signup Route
router.post("/signup", async (req, res) => {
  try {
    const response = await userHelpers.doSignup(req.body);
    req.session.user = response; // used to store the user data into the session
    req.session.userLoggedIn = true; // This is used to create a session after the user created a account

    // Respond back with success
    res.status(200).json({
      success: true,
      message: "Signup successful",
      user: response, // Send user data back
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Signup failed!",
      error: error.message,
    });
  }
});

// login operation
router.post("/login", (req, res) => {
  userHelpers.dologin(req.body).then((response) => {
    if (response.status == true) {
      req.session.user = response.user;
      req.session.userLoggedIn = true;

      // Respond back with success
      res.status(200).json({
        success: true,
        message: "Login successful",
        user: response.user, // Send user data back
      });
    } else {
      req.session.userLoginErr = true;
      res.status(401).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }
  });
});

module.exports = router;
