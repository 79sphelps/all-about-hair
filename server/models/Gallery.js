"use strict";

const mongoose = require("mongoose");
const GallerySchema = mongoose.Schema({
  caption: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  }
});

// const Gallery = mongoose.model("gallery2", GallerySchema);
const Gallery = mongoose.model("gallery2", GallerySchema);
module.exports = Gallery;
