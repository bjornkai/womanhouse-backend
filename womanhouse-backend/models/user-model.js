const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    // DOCUMENT STRUCTURE AND RULES ARE DEFINED HERE
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^.+@.+\..+$/,
      enum: ['bjornkairoland@gmail.com',
             'steve.montoya.93@gmail.com',
             'emilyafre@gmail.com',
             'andresnunez98@gmail.com'
      ],
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
