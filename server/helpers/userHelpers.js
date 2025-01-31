const mongoose = require("mongoose");
const UserModel = require("../DB-Models/User-Account");
const bcrypt = require("bcrypt");
const { ObjectId } = require("mongodb"); // used to convert the string to ObjectId
const { reject } = require("promise");

module.exports = {
  // used for the signup operation
  doSignup: (userData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const newUser = new UserModel(userData);
        const result = await newUser.save(); // Save to database
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  },
  //login operation
  dologin: (userData) => {
    return new Promise(async (resolve, reject) => {
      try {
        // console.log("This is the user entered data:", userData);
        // console.log("used entered email:", userData.email);

        let user = await UserModel.findOne({ email: userData.email });
        // console.log("User found in the database:", user);
        // if there is not a valid user available
        if (!user) {
          // console.log("User not found in the database.");

          return resolve({ status: false, message: "User not found" });
        }
        // console.log("User found, checking password...");

        const isPasswordCorrect = await bcrypt.compare(
          String(userData.password),
          user.password
        );
        // console.log("isPasswordCorrect:", isPasswordCorrect);

        if (!isPasswordCorrect) {
          // console.log("Incorrect password.");

          return resolve({ status: false, message: "Incorrect password" });
        }
        // console.log("Login successful!");

        resolve({ status: true, user: user });
      } catch (error) {
        console.error("Error during login:", error);
        reject({ status: false, message: "Login error occurred" });
      }
    });
  },
};
