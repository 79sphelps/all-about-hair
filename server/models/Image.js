const mongoose = require("mongoose");
const ImageSchema = mongoose.Schema({
  caption: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  description: String
});

const Image = mongoose.model("Image", ImageSchema);
module.exports = Image;
