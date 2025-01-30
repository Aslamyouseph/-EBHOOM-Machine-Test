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
        // Hash password before saving
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

        // Replace plain password with hashed password
        const newUser = new UserModel({
          ...userData,
          password: hashedPassword,
        });

        const result = await newUser.save(); // Save to database
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  },
};
