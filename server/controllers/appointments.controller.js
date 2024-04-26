"use strict";

const config = require("../config");
const mongoose = require("mongoose");
mongoose.connect(
  config.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const Appointments = require("../models/Appointments");

module.exports.getAppointments = function(req, res, next) {
  // Appointments.find({}, (err, data) => {
  //   let dataArr = [];
  //   if (err) {
  //     return res.status(500).send({ message: err.message });
  //   }

  //   if (data) {
  //     data.forEach(item => {
  //       dataArr.push(item);
  //     });
  //   }
  //   res.send(dataArr);
  // });
  Appointments.find({})
  .then(data => {
    let dataArr = [];
      if (data) {
        data.forEach(item => {
          dataArr.push(item);
        });
      }
      res.send(dataArr);
  })
  .catch(err => { return res.status(500).send({ message: err.message })})
};

module.exports.getAppointmentById = function(req, res, next) {
  // Appointments.findById(req.params.id, (err, appt) => {
  //   if (err) {
  //     return res.status(500).send({ message: err.message });
  //   }
  //   if (!appt) {
  //     return res.status(400).send({ message: "Appointment not found." });
  //   }
  //   res.send(appt);
  // });
  Appointments.findById(req.params.id)
  .then(service => {
    res.send(service);
  })
  .catch(err => { return res.status(500).send({ message: err.message })})
};

module.exports.create = function(req, res, next) {
  Appointments.findOne({ name: req.body.name }, (err, existingAppointment) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    if (existingAppointment) {
      return res.status(409).send({
        message: "This appointment is already listed in your database."
      });
    }

    const appt = new Appointments({
      name: req.body.name,
      email: req.body.email,
      category: req.body.category,
      message: req.body.message
    });

    appt.save(err => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      res.send(appt);
    });
  });
};

module.exports.update = (req, res, next) => {
  Appointments.findById(req.params.id, (err, appt) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    if (!appt) {
      return res.status(400).send({ message: "Appointment not found." });
    }

    appt.name = req.body.name;
    appt.email = req.body.email;
    appt.category = req.body.category;
    appt.message = req.body.message;

    appt.save(err => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      res.send(appt);
    });
  });
};

module.exports.destroy = (req, res, next) => {
  Appointments.findById(req.params.id, (err, appt) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    if (!appt) {
      return res.status(400).send({ message: "Appointment not found." });
    }
    Appointments.find({ _id: req.params.id }, (err, appts) => {
      appt.remove(err => {
        if (err) {
          return res.status(500).send({ message: err.message });
        }
        res.status(200).send({ message: "Appointment successfully deleted." });
      });
    });
  });
};
