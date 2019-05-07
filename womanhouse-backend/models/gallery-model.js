const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gallerySchema = new mongoose.Schema({
  image: { type: String },
  description: { type: String },
  addedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  }, {
    timestamps: true
});

module.exports = mongoose.model("Gallery", gallerySchema);