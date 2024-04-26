"use strict";

const config = require("../config");
const mongoose = require("mongoose");
mongoose.connect(
  config.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const Request = require("../models/Request");

module.exports.getRequests = function(req, res, next) {
  // Request.find({}, (err, data) => {
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
  Request.find({})
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

module.exports.getRequestById = function(req, res, next) {
  // Request.findById(req.params.id, (err, request) => {
  //   if (err) {
  //     return res.status(500).send({ message: err.message });
  //   }
  //   if (!request) {
  //     return res.status(400).send({ message: "Request not found." });
  //   }
  //   res.send(request);
  // });
  Request.findById(req.params.id)
  .then(service => {
    res.send(service);
  })
  .catch(err => { return res.status(500).send({ message: err.message })})
};

module.exports.create = function(req, res, next) {
  Request.findOne({ name: req.body.name }, (err, existingRequest) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    if (existingRequest) {
      return res
        .status(409)
        .send({ message: "This request is already listed in your database." });
    }

    const request = new Request({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      category: req.body.category
    });

    request.save(err => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      res.send(request);
    });
  });
};

module.exports.update = (req, res, next) => {
  Request.findById(req.params.id, (err, request) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    if (!request) {
      return res.status(400).send({ message: "Request not found." });
    }

    request.name = req.body.name;
    request.email = req.body.email;
    request.message = req.body.message;
    request.category = req.body.category;
    //request.date = req.body.date;
    //request.date = new Date();

    request.save(err => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      res.send(request);
    });
  });
};

module.exports.delete = (req, res, next) => {
  Request.findById(req.params.id, (err, request) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    if (!request) {
      return res.status(400).send({ message: "Request not found." });
    }
    Request.find({ _id: req.params.id }, (err, requests) => {
      request.remove(err => {
        if (err) {
          return res.status(500).send({ message: err.message });
        }
        res.status(200).send({ message: "Request successfully deleted." });
      });
    });
  });
};
