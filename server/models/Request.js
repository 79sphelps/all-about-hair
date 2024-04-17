"use strict";

const mongoose = require("mongoose");
const RequestSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

// const Request = mongoose.model("requests2", RequestSchema);
const Request = mongoose.model("requests", RequestSchema);
module.exports = Request;
