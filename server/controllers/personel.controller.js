"use strict";

const config = require("../config");
const mongoose = require("mongoose");
mongoose.connect(
  config.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const Personel = require("../models/Personel");

module.exports.getPersonel = function(req, res, next) {
  // Personel.find({}, (err, data) => {
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
  Personel.find({})
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

module.exports.getPersonelById = function(req, res, next) {
  // Personel.findById(req.params.id, (err, personel) => {
  //   if (err) {
  //     return res.status(500).send({ message: err.message });
  //   }
  //   if (!personel) {
  //     return res.status(400).send({ message: "Personel not found." });
  //   }
  //   res.send(personel);
  // });
  Personel.findById(req.params.id)
  .then(service => {
    res.send(service);
  })
  .catch(err => { return res.status(500).send({ message: err.message })})
};

module.exports.create = function(req, res, next) {
  Personel.findOne({ name: req.body.name }, (err, existingPersonel) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    if (existingPersonel) {
      return res
        .status(409)
        .send({
          message: "This person is already listed as part of your team."
        });
    }

    const person = new Personel({
      name: req.body.name,
      role: req.body.role,
      bio: req.body.bio,
      photo: req.body.photo
    });

    person.save(err => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      res.send(person);
    });
  });
};

module.exports.update = (req, res, next) => {
  Personel.findById(req.params.id, (err, person) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    if (!person) {
      return res.status(400).send({ message: "Personel not found." });
    }

    person.name = req.body.name;
    person.role = req.body.role;
    person.bio = req.body.bio;
    person.photo = req.body.photo;

    person.save(err => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      res.send(person);
    });
  });
};

module.exports.delete = (req, res, next) => {
  Personel.findById(req.params.id, (err, person) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    if (!person) {
      return res.status(400).send({ message: "Personel not found." });
    }
    Personel.find({ _id: req.params.id }, (err, personel) => {
      person.remove(err => {
        if (err) {
          return res.status(500).send({ message: err.message });
        }
        res.status(200).send({ message: "Personel successfully deleted." });
      });
    });
  });
};
