'use strict';

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const mongoose = require("mongoose");
const Request = require('../models/Request');

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server');
const should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('Request', () => {
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
    describe('/GET requests', () => {
        it('it should GET all the requests', (done) => {
            chai.request(server)
                .get('/api/admin/requests')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    //res.body.length.should.be.eql(0);
                    res.body.length.should.be.not.eql(0);
                    done();
                });
        });
    });

    describe('/POST requests', () => {
        it('it should not POST a requests without photo field', (done) => {
            let request = {
                name: "Test Request Name",
                email: "Test Request Email",
                message: "Test Request Message",
            }
            chai.request(server)
                .post('/api/requests/new')
                .send(request)
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

        it('it should POST a requests', (done) => {
            let request = {
                name: "Test Request Name",
                email: "Test Request Email",
                message: "Test Request Message",
                category: "Test Request Category"
            }
            chai.request(server)
                .post('/api/requests/new')
                .send(request)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('name').eql(request.name);
                    res.body.should.have.property('email').eql(request.email);
                    res.body.should.have.property('message').eql(request.message);
                    res.body.should.have.property('category').eql(request.category);

                    chai.request(server)
                    .get('/api/admin/requests/' + res.body._id)
                    .send(request)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('name');
                        res.body.should.have.property('email');
                        res.body.should.have.property('message');
                        res.body.should.have.property('category');
                        res.body.should.have.property('_id').eql(res.body._id);

                        chai.request(server)
                        .delete('/api/admin/requests/' + res.body._id)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('object');
                            res.body.should.have.property('message').eql('Request successfully deleted.');
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



    describe('/GET/:id requests', () => {
        it('it should GET a requests by the given id', (done) => {
            let request = new Request({
                name: "Test Request Name",
                email: "Test Request Email",
                message: "Test Request Message",
                category: "Test Request Category"
            });
            request.save((err, request) => {
                chai.request(server)
                    .get('/api/admin/requests/' + request.id)
                    .send(request)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('name').eql(request.name);
                        res.body.should.have.property('email').eql(request.email);
                        res.body.should.have.property('message').eql(request.message);
                        res.body.should.have.property('category').eql(request.category);
                        res.body.should.have.property('_id').eql(request.id);

                        chai.request(server)
                        .delete('/api/admin/requests/' + request.id)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('object');
                            res.body.should.have.property('message').eql('Request successfully deleted.');
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



    describe('/PUT/:id requests', () => {
        it('it should UPDATE a requests given the id', (done) => {
            let request = new Request({
                name: "Test Request Name",
                email: "Test Request Email",
                message: "Test Request Message",
                category: "Test Request Category"
            });
            request.save((err, request) => {
                chai.request(server)
                    .put('/api/admin/requests/update/' + request.id)
                    .send({
                        name: "Test Request Name Updated",
                        email: "Test Request Email",
                        message: "Test Request Message",
                        category: "Test Request Category"
                    })
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('name').eql(request.name + ' Updated');
                        res.body.should.have.property('email').eql(request.email);
                        res.body.should.have.property('message').eql(request.message);
                        res.body.should.have.property('category').eql(request.category);
                        //res.body.should.have.property('message').eql('Gallery image updated!');
                        //res.body.user.should.have.property('rawData').eql("{ n: 1, nModified: 1, ok: 1 }");

                        chai.request(server)
                            .get('/api/admin/requests/' + request.id)
                            .end((err, res) => {
                                res.should.have.status(200);
                                res.body.should.be.a('object');
                                res.body.should.have.property('name').eql(request.name + ' Updated');
                                res.body.should.have.property('email').eql(request.email);
                                res.body.should.have.property('message').eql(request.message);
                                res.body.should.have.property('category').eql(request.category);

                                chai.request(server)
                                .delete('/api/admin/requests/' + request.id)
                                .end((err, res) => {
                                    res.should.have.status(200);
                                    res.body.should.be.a('object');
                                    res.body.should.have.property('message').eql('Request successfully deleted.');
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

    describe('/DELETE/:id requests', () => {
        it('it should DELETE a requests given the id', (done) => {
            let request = new Request({
                name: "Test Request Name",
                email: "Test Request Email",
                message: "Test Request Message",
                category: "Test Request Category"
            });
            request.save((err, request) => {
                chai.request(server)
                    .delete('/api/admin/requests/' + request.id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql('Request successfully deleted.');
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
