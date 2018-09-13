"use strict";

const mongoose = require("mongoose");
const HomeSchema = mongoose.Schema({
  headline: {
    type: String,
    required: true
  },
  headlineSubMsg: {
    type: String,
    required: true
  },
  servicesHeadline: {
    type: String,
    required: true
  },
  servicesSubMsg: {
    type: String,
    required: true
  },
  aboutHeadline: {
    type: String,
    required: true
  },
  aboutSubMsg: {
    type: String,
    required: true
  },
  aboutImage: {
    type: String,
    required: true
  },
  aboutVideoLink: {
    type: String,
    required: true
  },
  stylistsHeadline: {
    type: String,
    required: true
  },
  stylistsSubMsg: {
    type: String,
    required: true
  },
  serviceDetailsHeadline: {
    type: String,
    required: true
  },
  serviceDetailsSubMsg: {
    type: String,
    required: true
  },
  contactHeadline: {
    type: String,
    required: true
  },
  contactSubMsg: {
    type: String,
    required: true
  }
});

const Home = mongoose.model("homepage2", HomeSchema);
module.exports = Home;
