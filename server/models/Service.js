"use strict";

const mongoose = require("mongoose");
const ServicesSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  pricing: {
    type: Array,
    require: true
  }
});

const Services = mongoose.model("services", ServicesSchema);
module.exports = Services;
