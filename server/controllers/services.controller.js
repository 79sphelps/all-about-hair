"use strict";

const config = require("../config");
const mongoose = require("mongoose");
mongoose.connect(
  config.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const Services = require("../models/Service");

module.exports.getServices = function(req, res, next) {
  // Services.find({}, (err, data) => {
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

  Services.find({})
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

module.exports.getServiceById = function(req, res, next) {
  // Services.findById(req.params.id, (err, service) => {
  //   if (err) {
  //     return res.status(500).send({ message: err.message });
  //   }
  //   if (!service) {
  //     return res.status(400).send({ message: "Service not found." });
  //   }
  //   res.send(service);
  // });
  Services.findById(req.params.id)
  .then(service => {
    res.send(service);
  })
  .catch(err => { return res.status(500).send({ message: err.message })})
};

module.exports.create = function(req, res, next) {
  Services.findOne({ title: req.body.title }, (err, existingService) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    if (existingService) {
      return res
        .status(409)
        .send({ message: "You already have this service." });
    }

    const service = new Services({
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      pricing: req.body.pricing
    });

    service.save(err => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      res.send(service);
    });
  });
};

module.exports.update = (req, res, next) => {
  Services.findById(req.params.id, (err, service) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    if (!service) {
      return res.status(400).send({ message: "Service not found." });
    }

    service.title = req.body.title;
    service.description = req.body.description;
    service.image = req.body.image;
    service.pricing = req.body.pricing;

    service.save(err => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      res.send(service);
    });
  });
};

module.exports.delete = (req, res, next) => {
  Services.findById(req.params.id, (err, service) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    if (!service) {
      return res.status(400).send({ message: "Service not found." });
    }
    Services.find({ _id: req.params.id }, (err, services) => {
      service.remove(err => {
        if (err) {
          return res.status(500).send({ message: err.message });
        }
        res.status(200).send({ message: "Service successfully deleted." });
      });
    });
  });
};
