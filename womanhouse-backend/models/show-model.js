const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const showSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: String, required: true }
  }, {
    timestamps: true
});


module.exports = mongoose.model("Show", showSchema);