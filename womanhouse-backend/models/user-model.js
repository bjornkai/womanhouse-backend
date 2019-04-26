const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    // DOCUMENT STRUCTURE AND RULES ARE DEFINED HERE
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^.+@.+\..+$/
    },
    encryptedPassword: { 
      type: String, 
      required: true 
    }
  },
  {
    // ADDITIONAL SETTINGS FOR THE SCHEMA CLASS
    timestamps: true
  }
);

// "User" model -> "users" collection
const User = mongoose.model("User", userSchema);

module.exports = User;
