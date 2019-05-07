const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  lyrics: { type: String, required: true }
  }, {
    timestamps: true
});

module.exports = mongoose.model("Song", songSchema);