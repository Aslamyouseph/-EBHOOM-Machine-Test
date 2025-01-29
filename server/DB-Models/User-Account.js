const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); // This library is used to hash the password before saving it to the database

// Defining the user schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    this.password = await bcrypt.hash(this.password, 10); // Hash the password
    next();
  } catch (error) {
    next(error);
  }
});

// Creating the model
const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
