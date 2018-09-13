"use strict";

const mongoose = require("mongoose");
const TestimonialSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quote: {
    type: String,
    required: true
  }
});

const Testimonial = mongoose.model("Testimonial", TestimonialSchema);
module.exports = Testimonial;
