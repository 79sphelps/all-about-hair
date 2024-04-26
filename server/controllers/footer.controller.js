"use strict";

const config = require(appRoot + "/server/config");
const mongoose = require("mongoose");
mongoose.connect(
  config.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const Footer = require(appRoot + "/server/models/Footer");

module.exports.getFooterInfo = function(req, res, next) {
  // Footer.find({}, (err, data) => {
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
  Footer.find({})
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

// module.exports.getFooterInfoById = function(req, res, next) {
//     Footer.findById(req.params.id, (err, info) => {
//     if (err) {
//       return res.status(500).send({ message: err.message });
//     }
//     if (!info) {
//       return res.status(400).send({ message: "Info not found." });
//     }
//     res.send(info);
//   });
// };

module.exports.update = (req, res, next) => {
    Footer.findById(req.params.id, (err, info) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    if (!info) {
      return res.status(400).send({ message: "Info not found." });
    }

    // info.location = req.body.location;
    // info.phone = req.body.phone;
    // info.email = req.body.email;
    // info.hours = req.body.hours;
    info.aboutMsg = req.body.aboutMsg;

    info.save(err => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      res.send(info);
    });
  });
};
