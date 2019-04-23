const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: String, required: true },
  specs: [
      { type: String, minlength: 3 }
    ],
  }, {
    timestamps: true
});

module.exports = mongoose.model("Show", showSchema);