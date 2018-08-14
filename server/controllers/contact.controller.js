// Config
const config = require("../config");

const mongoose = require("mongoose");
mongoose.connect(config.MONGO_URI);

const Contact = require("../models/contact");

const _projection = "headline headlineSubMsg";

module.exports.getContactInfo = function(req, res, next) {
    Contact.find({}, (err, data) => {
        let dataArr = [];
        if (err) {
            return res.status(500).send({ message: err.message });
        }

        console.log(data);

        if (data) {
            data.forEach(item => {
                dataArr.push(item);
            });
        }
        res.send(dataArr);
    });
};

module.exports.getContactInfoById = function(req, res, next) {
    Contact.findById(req.params.id, (err, info) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      if (!info) {
        return res.status(400).send({ message: "Info not found." });
      }
      res.send(info);
    });
}

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