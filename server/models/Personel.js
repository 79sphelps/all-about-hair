"use strict";

const mongoose = require("mongoose");
const PersonelSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  }
});

const Personel = mongoose.model("personel2", PersonelSchema);
module.exports = Personel;
