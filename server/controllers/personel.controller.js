// Config
const config = require("../config");

const mongoose = require("mongoose");
mongoose.connect(config.MONGO_URI);

const Personel = require("../models/Personel");

const _projection = "headline headlineSubMsg";

module.exports.getPersonel = function(req, res, next) {
    Personel.find({}, (err, data) => {
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

module.exports.getPersonelById = function(req, res, next) {
    Personel.findById(req.params.id, (err, personel) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      if (!personel) {
        return res.status(400).send({ message: "Personel not found." });
      }
      res.send(personel);
    });
}

module.exports.create = function(req, res, next) {
    Personel.findOne(
        { name: req.body.name },
        (err, existingPersonel) => {
            if (err) {
                return res.status(500).send({ message: err.message });
            }
            if (existingPersonel) {
                return res
                .status(409)
                .send({ message: "This person is already listed as part of your team." });
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
        }
    );
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