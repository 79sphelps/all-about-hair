'use strict';

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const mongoose = require("mongoose");
const Services = require('../models/Service');

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server');
const should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('Service', () => {
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
    describe('/GET service', () => {
        it('it should GET all the services', (done) => {
            chai.request(server)
                .get('/api/admin/services')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    //res.body.length.should.be.eql(0);
                    res.body.length.should.be.not.eql(0);
                    done();
                });
        });
    });

    describe('/POST service', () => {
        it('it should not POST a service without description field', (done) => {
            let service = {
                title: "Test Title",
                image: "Test Image Path",
            }
            chai.request(server)
                .post('/api/admin/services')
                .send(service)
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

        it('it should POST a service', (done) => {
            let service = {
                title: "Test Title",
                image: "Test Image Path",
                description: "Test Description",
                pricing: []
            }
            chai.request(server)
                .post('/api/admin/services')
                .send(service)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('title').eql(service.title);
                    res.body.should.have.property('image').eql(service.image);
                    res.body.should.have.property('description').eql(service.description);
                    res.body.should.have.property('pricing').eql(service.pricing);

                    chai.request(server)
                    .get('/api/admin/services/' + res.body._id)
                    .send(service)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('title');
                        res.body.should.have.property('image');
                        res.body.should.have.property('description');
                        res.body.should.have.property('pricing');
                        res.body.should.have.property('_id').eql(res.body._id);

                        chai.request(server)
                        .delete('/api/admin/services/' + res.body._id)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('object');
                            res.body.should.have.property('message').eql('Service successfully deleted.');
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



    describe('/GET/:id service', () => {
        it('it should GET a service by the given id', (done) => {
            let service = new Services({
                title: "Test Title",
                image: "Test Image Path",
                description: "Test Description",
                pricing: []
            });
            service.save((err, service) => {
                chai.request(server)
                    .get('/api/admin/services/' + service.id)
                    .send(service)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('title').eql(service.title);
                        res.body.should.have.property('image').eql(service.image);
                        res.body.should.have.property('description').eql(service.description);
                        res.body.should.have.property('pricing').eql(service.pricing);
                        res.body.should.have.property('_id').eql(service.id);

                        chai.request(server)
                        .delete('/api/admin/services/' + service.id)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('object');
                            res.body.should.have.property('message').eql('Service successfully deleted.');
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



    describe('/PUT/:id service', () => {
        it('it should UPDATE a service given the id', (done) => {
            let service = new Services({
                title: "Test Title",
                image: "Test Image Path",
                description: "Test Description",
                pricing: []
            });
            service.save((err, service) => {
                chai.request(server)
                    .put('/api/admin/services/update/' + service.id)
                    .send({
                        title: "Test Title Updated",
                        image: "Test Image Path",
                        description: "Test Description",
                        pricing: []
                    })
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('title').eql('Test Title Updated');
                        res.body.should.have.property('image').eql(service.image);
                        res.body.should.have.property('description').eql(service.description);
                        res.body.should.have.property('pricing').eql(service.pricing);
                        //res.body.should.have.property('message').eql('Gallery image updated!');
                        //res.body.user.should.have.property('rawData').eql("{ n: 1, nModified: 1, ok: 1 }");

                        chai.request(server)
                            .get('/api/admin/services/' + service.id)
                            .end((err, res) => {
                                res.should.have.status(200);
                                res.body.should.be.a('object');
                                res.body.should.have.property('title').eql('Test Title Updated');
                                res.body.should.have.property('image').eql(service.image);
                                res.body.should.have.property('description').eql(service.description);
                                res.body.should.have.property('pricing').eql(service.pricing);

                                chai.request(server)
                                .delete('/api/admin/services/' + service.id)
                                .end((err, res) => {
                                    res.should.have.status(200);
                                    res.body.should.be.a('object');
                                    res.body.should.have.property('message').eql('Service successfully deleted.');
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

    describe('/DELETE/:id service', () => {
        it('it should DELETE a service given the id', (done) => {
            let service = new Services({
                title: "Test Title",
                image: "Test Image Path",
                description: "Test Description",
                pricing: []
            });
            service.save((err, service) => {
                chai.request(server)
                    .delete('/api/admin/services/' + service.id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql('Service successfully deleted.');
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
