"use strict";

const mongoose = require("mongoose");
const AppointmentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

const Appointment = mongoose.model("appointments", AppointmentSchema);
module.exports = Appointment;
