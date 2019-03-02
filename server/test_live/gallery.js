'use strict';

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const mongoose = require("mongoose");
const Gallery = require('../models/Gallery');

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server');
const should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('Gallery', () => {
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
    describe('/GET gallery images', () => {
        it('it should GET all the gallery images', (done) => {
            chai.request(server)
                .get('/api/admin/gallery')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    //res.body.length.should.be.eql(0);
                    res.body.length.should.be.not.eql(0);
                    done();
                });
        });
    });

    describe('/POST gallery image', () => {
        it('it should not POST a user without path field', (done) => {
            let image = {
                caption: "Gallery Image 10"
            }
            chai.request(server)
                .post('/api/admin/gallery')
                .send(image)
                .end((err, res) => {
                    res.should.have.status(500);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    //res.body.errors.should.have.property('path');
                    res.body.message.should.be.eql('gallery2 validation failed: path: Path `path` is required.');
                    //res.body.errors.name.should.have.property('path').eql('required');
                    done();
                });
        });

        it('it should POST a gallery image', (done) => {
            let image = {
                path: "assets/images/g10.jpg",
                caption: "Gallery Image 10"
            }
            chai.request(server)
                .post('/api/admin/gallery')
                .send(image)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('path').eql(image.path);
                    res.body.should.have.property('caption').eql(image.caption);

                    chai.request(server)
                    .get('/api/admin/gallery/' + res.body._id)
                    .send(image)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('path');
                        res.body.should.have.property('caption');
                        res.body.should.have.property('_id').eql(res.body._id);

                        chai.request(server)
                        .delete('/api/admin/gallery/' + res.body._id)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('object');
                            res.body.should.have.property('message').eql('Photo successfully deleted.');
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

    describe('/GET/:id gallery image', () => {
        it('it should GET a gallery image by the given id', (done) => {
            let image = new Gallery({
                path: "assets/images/g10.jpg",
                caption: "Gallery Image 10"
            });
            image.save((err, image) => {
                chai.request(server)
                    .get('/api/admin/gallery/' + image.id)
                    .send(image)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('path');
                        res.body.should.have.property('caption');
                        res.body.should.have.property('_id').eql(image.id);

                        chai.request(server)
                        .delete('/api/admin/gallery/' + image.id)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('object');
                            res.body.should.have.property('message').eql('Photo successfully deleted.');
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

    describe('/PUT/:id gallery image', () => {
        it('it should UPDATE a gallery image given the id', (done) => {
            let image = new Gallery({
                path: "assets/images/g10.jpg",
                caption: "Gallery Image 10"
            });
            image.save((err, image) => {
                chai.request(server)
                    .put('/api/admin/gallery/update/' + image.id)
                    .send({
                        path: "assets/images/g11.jpg",
                        caption: "Gallery Image 11"
                    })
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('path').eql('assets/images/g11.jpg');
                        res.body.should.have.property('caption').eql('Gallery Image 11');
                        //res.body.should.have.property('message').eql('Gallery image updated!');
                        //res.body.user.should.have.property('rawData').eql("{ n: 1, nModified: 1, ok: 1 }");
                        chai.request(server)
                            .get('/api/admin/gallery/' + image.id)
                            .end((err, res) => {
                                res.should.have.status(200);
                                res.body.should.be.a('object');
                                res.body.should.have.property('path').eql('assets/images/g11.jpg');
                                res.body.should.have.property('caption').eql('Gallery Image 11');

                                chai.request(server)
                                .delete('/api/admin/gallery/' + image.id)
                                .end((err, res) => {
                                    res.should.have.status(200);
                                    res.body.should.be.a('object');
                                    res.body.should.have.property('message').eql('Photo successfully deleted.');
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

    describe('/DELETE/:id gallery image', () => {
        it('it should DELETE a gallery image given the id', (done) => {
            let image = new Gallery({
                path: "assets/images/g11.jpg",
                caption: "Gallery Image 11"
            });
            image.save((err, image) => {
                chai.request(server)
                    .delete('/api/admin/gallery/' + image.id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql('Photo successfully deleted.');
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
