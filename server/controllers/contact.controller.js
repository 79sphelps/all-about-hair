"use strict";

const config = require(appRoot + "/server/config");
const mongoose = require("mongoose");
mongoose.connect(
  config.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const Contact = require(appRoot + "/server/models/Contact");

module.exports.getContactInfo = function(req, res, next) {
  // Contact.find({}, (err, data) => {
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
  Contact.find({})
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

module.exports.getContactInfoById = function(req, res, next) {
  // Contact.findById(req.params.id, (err, info) => {
  //   if (err) {
  //     return res.status(500).send({ message: err.message });
  //   }
  //   if (!info) {
  //     return res.status(400).send({ message: "Info not found." });
  //   }
  //   res.send(info);
  // });
  Contact.findById(req.params.id)
  .then(service => {
    res.send(service);
  })
  .catch(err => { return res.status(500).send({ message: err.message })})
};

module.exports.update = (req, res, next) => {
  Contact.findById(req.params.id, (err, info) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    if (!info) {
      return res.status(400).send({ message: "Info not found." });
    }

    info.location = req.body.location;
    info.phone = req.body.phone;
    info.email = req.body.email;
    info.hours = req.body.hours;

    info.save(err => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      res.send(info);
    });
  });
};
