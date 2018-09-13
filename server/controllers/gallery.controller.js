"use strict";

const config = require("../config");
const mongoose = require("mongoose");
mongoose.connect(config.MONGO_URI);
const Gallery = require("../models/Gallery");

module.exports.getGallery = function(req, res, next) {
  Gallery.find({}, (err, data) => {
    let dataArr = [];
    if (err) {
      return res.status(500).send({ message: err.message });
    }

    if (data) {
      data.forEach(item => {
        dataArr.push(item);
      });
    }
    res.send(dataArr);
  });
};

module.exports.getGalleryPhotoById = function(req, res, next) {
  Gallery.findById(req.params.id, (err, photo) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    if (!photo) {
      return res.status(400).send({ message: "Photo not found." });
    }
    res.send(photo);
  });
};

module.exports.create = function(req, res, next) {
  Gallery.findOne({ path: req.body.path }, (err, existingPhoto) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    if (existingPhoto) {
      return res.status(409).send({ message: "You already have this photo." });
    }

    const gallery = new Gallery({
      path: req.body.path,
      caption: req.body.caption
    });

    gallery.save(err => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      res.send(gallery);
    });
  });
};

module.exports.update = (req, res, next) => {
  Gallery.findById(req.params.id, (err, photo) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    if (!photo) {
      return res.status(400).send({ message: "Photo not found." });
    }

    photo.path = req.body.path;
    photo.caption = req.body.caption;

    photo.save(err => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      res.send(photo);
    });
  });
};

module.exports.delete = (req, res, next) => {
  Gallery.findById(req.params.id, (err, photo) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    if (!photo) {
      return res.status(400).send({ message: "Photo not found." });
    }
    Gallery.find({ _id: req.params.id }, (err, photos) => {
      photo.remove(err => {
        if (err) {
          return res.status(500).send({ message: err.message });
        }
        res.status(200).send({ message: "Photo successfully deleted." });
      });
    });
  });
};
