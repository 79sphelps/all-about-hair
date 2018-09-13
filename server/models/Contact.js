"use strict";

const mongoose = require("mongoose");
const ContactSchema = mongoose.Schema({
  location: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  hours: {
    type: Array,
    required: true
  }
});

const Contact = mongoose.model("contact2", ContactSchema);
module.exports = Contact;
