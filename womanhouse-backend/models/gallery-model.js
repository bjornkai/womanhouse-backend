const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
  image: { type: String, required: true },
  description: { type: String, required: true },
  addedBy: { type: Schema.Types.ObjectId, ref: "User" }
  }, {
    timestamps: true
});

module.exports = mongoose.model("Gallery", gallerySchema);