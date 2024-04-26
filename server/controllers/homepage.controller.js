"use strict";

const config = require("../config");
const mongoose = require("mongoose");
mongoose.connect(
  config.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const Homepage = require("../models/Homepage");

module.exports.getHomepage = function(req, res, next) {
  // Homepage.find({}, (err, data) => {
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
  Homepage.find({})
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

module.exports.getHomepageById = function(req, res, next) {
  // Homepage.findById(req.params.id, (err, homepage) => {
  //   if (err) {
  //     return res.status(500).send({ message: err.message });
  //   }
  //   if (!homepage) {
  //     return res.status(400).send({ message: "Homepage not found." });
  //   }
  //   res.send(homepage);
  // });
  Homepage.findById(req.params.id)
  .then(service => {
    res.send(service);
  })
  .catch(err => { return res.status(500).send({ message: err.message })})
};

module.exports.update = (req, res, next) => {
  Homepage.findById(req.params.id, (err, homepage) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    if (!homepage) {
      return res.status(400).send({ message: "Homepage not found." });
    }

    homepage.headline = req.body.headline;
    homepage.headlineSubMsg = req.body.headlineSubMsg;
    homepage.servicesHeadline = req.body.servicesHeadline;
    homepage.servicesSubMsg = req.body.servicesSubMsg;
    homepage.aboutHeadline = req.body.aboutHeadline;
    homepage.aboutSubMsg = req.body.aboutSubMsg;
    homepage.aboutImage = req.body.aboutImage;
    homepage.aboutVideoLink = req.body.aboutVideoLink;
    homepage.stylistsHeadline = req.body.stylistsHeadline;
    homepage.stylistsSubMsg = req.body.stylistsSubMsg;
    homepage.serviceDetailsHeadline = req.body.serviceDetailsHeadline;
    homepage.serviceDetailsSubMsg = req.body.serviceDetailsSubMsg;
    homepage.contactHeadline = req.body.contactHeadline;
    homepage.contactSubMsg = req.body.contactSubMsg;

    homepage.save(err => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      res.send(homepage);
    });
  });
};
