const express = require("express");
const router = express.Router();
const userHelpers = require("../helpers/userHelpers"); // Accessing user-helpers file

// Signup Route
router.post("/signup", async (req, res) => {
  try {
    const response = await userHelpers.doSignup(req.body);
    res
      .status(201)
      .json({ success: true, message: "Signup successful!", user: response });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Signup failed!",
      error: error.message,
    });
  }
});

module.exports = router;
