'use strict';

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const mongoose = require("mongoose");
const Appointment = require('../models/Appointments');

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server');
const should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('Appointments', () => {
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
    describe('/GET appointments', () => {
        it('it should GET all the appointments', (done) => {
            chai.request(server)
                .get('/api/admin/appointments')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    //res.body.length.should.be.eql(0);
                    res.body.length.should.be.not.eql(0);
                    done();
                });
        });
    });

    describe('/POST appointment', () => {
        it('it should not POST a user without message field', (done) => {
            let appt = {
                name: "Test Appt Name",
                email: "Test Appt Email",
                category: "Test Appt Category",
            }
            chai.request(server)
                .post('/api/appointments/new')
                .send(appt)
                .end((err, res) => {
                    console.log(res.body);
                    res.should.have.status(500);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    //res.body.errors.should.have.property('path');
                    //res.body.message.should.be.eql('gallery2 validation failed: path: Path `path` is required.');
                    //res.body.errors.name.should.have.property('path').eql('required');
                    done();
                });
        });

        it('it should POST a appointment', (done) => {
            let appt = {
                name: "Test Appt Name",
                email: "Test Appt Email",
                category: "Test Appt Category",
                message: "Test Appt Message"
            }
            chai.request(server)
                .post('/api/appointments/new')
                .send(appt)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('name').eql(appt.name);
                    res.body.should.have.property('email').eql(appt.email);
                    res.body.should.have.property('category').eql(appt.category);
                    res.body.should.have.property('message').eql(appt.message);

                    chai.request(server)
                    .get('/api/admin/appointments/' + res.body._id)
                    .send(appt)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('name').eql(appt.name);
                        res.body.should.have.property('email').eql(appt.email);
                        res.body.should.have.property('category').eql(appt.category);
                        res.body.should.have.property('message').eql(appt.message);
                        res.body.should.have.property('_id').eql(res.body._id);

                        chai.request(server)
                        .delete('/api/admin/appointments/' + res.body._id)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('object');
                            res.body.should.have.property('message').eql('Appointment successfully deleted.');
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

    describe('/GET/:id appt', () => {
        it('it should GET a appt by the given id', (done) => {
            let appt = new Appointment({
                name: "Test Appt Name",
                email: "Test Appt Email",
                category: "Test Appt Category",
                message: "Test Appt Message"
            });
            appt.save((err, appt) => {
                chai.request(server)
                    .get('/api/admin/appointments/' + appt.id)
                    .send(appt)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('name').eql(appt.name);
                        res.body.should.have.property('email').eql(appt.email);
                        res.body.should.have.property('category').eql(appt.category);
                        res.body.should.have.property('message').eql(appt.message);
                        res.body.should.have.property('_id').eql(appt.id);

                        chai.request(server)
                        .delete('/api/admin/appointments/' + appt.id)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('object');
                            res.body.should.have.property('message').eql('Appointment successfully deleted.');
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

    describe('/PUT/:id appt', () => {
        it('it should UPDATE a appt given the id', (done) => {
            let appt = new Appointment({
                name: "Test Appt Name",
                email: "Test Appt Email",
                category: "Test Appt Category",
                message: "Test Appt Message"
            });
            appt.save((err, appt) => {
                chai.request(server)
                    .put('/api/admin/appointments/update/' + appt.id)
                    .send({
                        name: "Test Appt Name Updated",
                        email: "Test Appt Email",
                        category: "Test Appt Category",
                        message: "Test Appt Message"
                    })
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('name').eql(appt.name + ' Updated');
                        res.body.should.have.property('email').eql(appt.email);
                        res.body.should.have.property('category').eql(appt.category);
                        res.body.should.have.property('message').eql(appt.message);
                        //res.body.user.should.have.property('rawData').eql("{ n: 1, nModified: 1, ok: 1 }");
                        chai.request(server)
                            .get('/api/admin/appointments/' + appt.id)
                            .end((err, res) => {
                                res.should.have.status(200);
                                res.body.should.be.a('object');
                                res.body.should.have.property('name').eql(appt.name + ' Updated');
                                res.body.should.have.property('email').eql(appt.email);
                                res.body.should.have.property('category').eql(appt.category);
                                res.body.should.have.property('message').eql(appt.message);

                                chai.request(server)
                                .delete('/api/admin/appointments/' + appt.id)
                                .end((err, res) => {
                                    res.should.have.status(200);
                                    res.body.should.be.a('object');
                                    res.body.should.have.property('message').eql('Appointment successfully deleted.');
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

    describe('/DELETE/:id appt', () => {
        it('it should DELETE a appt given the id', (done) => {
            let appt = new Appointment({
                name: "Test Appt Name",
                email: "Test Appt Email",
                category: "Test Appt Category",
                message: "Test Appt Message"
            });
            appt.save((err, appt) => {
                chai.request(server)
                    .delete('/api/admin/appointments/' + appt.id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql('Appointment successfully deleted.');
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
