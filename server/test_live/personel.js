'use strict';

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const mongoose = require("mongoose");
const Personel = require('../models/Personel');

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server');
const should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('Personel', () => {
    /*
    beforeEach((done) => { //Before each test we empty the database
        Image.remove({}, (err) => {
            done();
        });
    });
    */

    /*
     * Test the /GET route
     */
    describe('/GET personel', () => {
        it('it should GET all the personels', (done) => {
            chai.request(server)
                .get('/api/admin/personel')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    //res.body.length.should.be.eql(0);
                    res.body.length.should.be.not.eql(0);
                    done();
                });
        });
    });

    describe('/POST personel', () => {
        it('it should not POST a personel without photo field', (done) => {
            let person = {
                name: "Test Personel",
                role: "Test Personel Role",
                bio: "Test Personel Bio",
            }
            chai.request(server)
                .post('/api/admin/personel')
                .send(person)
                .end((err, res) => {
                    res.should.have.status(500);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    //res.body.errors.should.have.property('path');
                    //res.body.message.should.be.eql('gallery2 validation failed: path: Path `path` is required.');
                    //res.body.errors.name.should.have.property('path').eql('required');
                    done();
                });
        });

        it('it should POST a personel', (done) => {
            let person = {
                name: "Test Personel",
                role: "Test Personel Role",
                bio: "Test Personel Bio",
                photo: "Test Personel Photo Path"
            }
            chai.request(server)
                .post('/api/admin/personel')
                .send(person)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('name').eql(person.name);
                    res.body.should.have.property('role').eql(person.role);
                    res.body.should.have.property('bio').eql(person.bio);
                    res.body.should.have.property('photo').eql(person.photo);

                    chai.request(server)
                    .get('/api/admin/personel/' + res.body._id)
                    .send(person)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('name');
                        res.body.should.have.property('role');
                        res.body.should.have.property('bio');
                        res.body.should.have.property('photo');
                        res.body.should.have.property('_id').eql(res.body._id);

                        chai.request(server)
                        .delete('/api/admin/personel/' + res.body._id)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('object');
                            res.body.should.have.property('message').eql('Personel successfully deleted.');
                            //console.log(res.body);
                            //console.log(typeof res.body.rawData);
                            //res.body.result.should.have.property('ok').eql(1);
                            //res.body.result.should.have.property('n').eql(1);
                            //res.body.result.should.have.property('rawData').eql({ n: 1, ok: 1})
                            done();
                        });
                    });

                });
        });
    });



    describe('/GET/:id personel', () => {
        it('it should GET a personel by the given id', (done) => {
            let person = new Personel({
                name: "Test Personel",
                role: "Test Personel Role",
                bio: "Test Personel Bio",
                photo: "Test Personel Photo Path"
            });
            person.save((err, person) => {
                chai.request(server)
                    .get('/api/admin/personel/' + person.id)
                    .send(person)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('name').eql(person.name);
                        res.body.should.have.property('role').eql(person.role);
                        res.body.should.have.property('bio').eql(person.bio);
                        res.body.should.have.property('photo').eql(person.photo);
                        res.body.should.have.property('_id').eql(person.id);

                        chai.request(server)
                        .delete('/api/admin/personel/' + person.id)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('object');
                            res.body.should.have.property('message').eql('Personel successfully deleted.');
                            //console.log(res.body);
                            //console.log(typeof res.body.rawData);
                            //res.body.result.should.have.property('ok').eql(1);
                            //res.body.result.should.have.property('n').eql(1);
                            //res.body.result.should.have.property('rawData').eql({ n: 1, ok: 1})
                            done();
                        });
                    });
            });

        });
    });



    describe('/PUT/:id personel', () => {
        it('it should UPDATE a personel given the id', (done) => {
            let person = new Personel({
                name: "Test Personel",
                role: "Test Personel Role",
                bio: "Test Personel Bio",
                photo: "Test Personel Photo Path"
            });
            person.save((err, person) => {
                chai.request(server)
                    .put('/api/admin/personel/update/' + person.id)
                    .send({
                        name: "Test Personel Updated",
                        role: "Test Personel Role",
                        bio: "Test Personel Bio",
                        photo: "Test Personel Photo Path"
                    })
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('name').eql(person.name + ' Updated');
                        res.body.should.have.property('role').eql(person.role);
                        res.body.should.have.property('bio').eql(person.bio);
                        res.body.should.have.property('photo').eql(person.photo);
                        //res.body.should.have.property('message').eql('Gallery image updated!');
                        //res.body.user.should.have.property('rawData').eql("{ n: 1, nModified: 1, ok: 1 }");

                        chai.request(server)
                            .get('/api/admin/personel/' + person.id)
                            .end((err, res) => {
                                res.should.have.status(200);
                                res.body.should.be.a('object');
                                res.body.should.have.property('name').eql(person.name + ' Updated');
                                res.body.should.have.property('role').eql(person.role);
                                res.body.should.have.property('bio').eql(person.bio);
                                res.body.should.have.property('photo').eql(person.photo);

                                chai.request(server)
                                .delete('/api/admin/personel/' + person.id)
                                .end((err, res) => {
                                    res.should.have.status(200);
                                    res.body.should.be.a('object');
                                    res.body.should.have.property('message').eql('Personel successfully deleted.');
                                    //console.log(res.body);
                                    //console.log(typeof res.body.rawData);
                                    //res.body.result.should.have.property('ok').eql(1);
                                    //res.body.result.should.have.property('n').eql(1);
                                    //res.body.result.should.have.property('rawData').eql({ n: 1, ok: 1})
                                    done();
                                });
                            });
                    });
            });
        });
    });

    describe('/DELETE/:id personel', () => {
        it('it should DELETE a personel given the id', (done) => {
            let person = new Personel({
                name: "Test Personel",
                role: "Test Personel Role",
                bio: "Test Personel Bio",
                photo: "Test Personel Photo Path"
            });
            person.save((err, person) => {
                chai.request(server)
                    .delete('/api/admin/personel/' + person.id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql('Personel successfully deleted.');
                        //console.log(res.body);
                        //console.log(typeof res.body.rawData);
                        //res.body.result.should.have.property('ok').eql(1);
                        //res.body.result.should.have.property('n').eql(1);
                        //res.body.result.should.have.property('rawData').eql({ n: 1, ok: 1})
                        done();
                    });
            });
        });
    });

});
