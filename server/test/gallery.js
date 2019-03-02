"use strict";

//During the test the env variable is set to test
process.env.NODE_ENV = "test";

// const mongoose = require("mongoose");
// const Appointment = require("../models/Appointments");
// const server = require("../../server");

//Require the dev-dependencies
const chai = require("chai");
// const chaiHttp = require("chai-http");
// const should = chai.should();

const expect = require("chai").expect;
const nock = require("nock");

const getGalleryResponse = require("./gallery-response");
const getGallery = require("./gallery-index").getGallery;
const getGalleryImage = require("./gallery-index").getGalleryImage;
const createGalleryImage = require("./gallery-index").createGalleryImage;
const updateGalleryImage = require("./gallery-index").updateGalleryImage;
const deleteGalleryImage = require("./gallery-index").deleteGalleryImage;

// chai.use(chaiHttp);

//Our parent block
describe("Gallery", () => {
  describe("/GET gallery", () => {
    beforeEach(() => {
      nock("http://localhost:80")
        .get("/api/admin/gallery")
        .reply(200, getGalleryResponse);
    });

    it("it should GET all the gallery", () => {
      return getGallery().then(res => {
        //expect an object back
        expect(typeof res).to.equal("object");

        //Test result of name, company and location for the response
        expect(res.length).to.be.not.equal(0);
        expect(res.length).to.be.equal(6);
        expect(res[0].path).to.equal("assets/images/g1.jpg");
        expect(res[0].caption).to.equal("Gallery Image 1");
      });
    });
  });

  describe("/GET gallery image", () => {
    let id = 1;
    let mockGalleryResponse = {
      path: "Test Image Path",
      caption: "Test Image Caption",
      _id: "1"
    };

    beforeEach(() => {
      nock("http://localhost:80")
        .get(`/api/admin/gallery/${id}`)
        .reply(200, mockGalleryResponse);
    });

    it("it should GET an appointment", () => {
      return getGalleryImage(id).then(res => {
        //expect an object back
        expect(typeof res).to.equal("object");

        //Test result of name, company and location for the response
        expect(res.path).to.equal("Test Image Path");
        expect(res.caption).to.equal("Test Image Caption");
      });
    });
  });

  describe("/POST gallery image", () => {
    let mockGalleryResponse = {
      path: "Test Image Path",
      caption: "Test Image Caption",
      _id: "1"
    };

    beforeEach(() => {
      nock("http://localhost:80")
        .post("/api/admin/gallery/new")
        .reply(201, mockGalleryResponse);
    });

    it("it should create a gallery image", () => {
      let mockGalleryImage = {
        path: "Test Image Path",
        caption: "Test Image Caption",
        _id: "1"
      };

      return createGalleryImage(mockGalleryImage).then(res => {
        //expect an object back
        expect(typeof res).to.equal("object");

        //Test result of name, company and location for the response
        expect(res.path).to.equal("Test Image Path");
        expect(res.caption).to.equal("Test Image Caption");
      });
    });
  });

  describe("/PUT gallery image", () => {
    let id = 1;

    let mockGalleryImage = {
      path: "Test Image Path",
      caption: "Test Image Caption",
      _id: "1"
    };

    let mockGalleryResponse = {
      path: "Test Image Path",
      caption: "Test Image Caption",
      _id: "1"
    };

    let mockGalleryUpdatedResponse = {
      path: "Test Image Path Updated",
      caption: "Test Image Caption Updated",
      _id: "1"
    };

    beforeEach(() => {
      nock("http://localhost:80")
        .persist()
        .post("/api/admin/gallery/new", mockGalleryImage)
        .reply(201, mockGalleryResponse)
        .put("/api/admin/gallery/update/" + id, mockGalleryUpdatedResponse)
        .reply(200, mockGalleryUpdatedResponse);
    });

    it("it should update a gallery image", () => {
      return updateGalleryImage(id, mockGalleryUpdatedResponse).then(res => {
        //expect an object back
        expect(typeof res).to.equal("object");

        //Test result of name, company and location for the response
        expect(res.path).to.equal("Test Image Path Updated");
        expect(res.caption).to.equal("Test Image Caption Updated");
      });
    });
  });

  describe("/DELETE gallery image", () => {
    let id = 1;

    let mockGalleryResponse = {
      path: "Test Image Path",
      caption: "Test Image Caption",
      _id: "1"
    };

    let mockGalleryImageDeleteResponse = {
      message: "Photo successfully deleted."
    };

    beforeEach(() => {
      nock("http://localhost:80")
        .persist()
        .post("/api/admin/gallery/new")
        .reply(201, mockGalleryResponse)
        .delete(`/api/admin/gallery/${id}`)
        .reply(200, mockGalleryImageDeleteResponse);
    });

    it("it should delete an gallery image", () => {
      return deleteGalleryImage(id).then(res => {
        //expect an object back
        expect(typeof res).to.equal("object");
        expect(res.message).to.equal("Photo successfully deleted.");
      });
    });
  });
});
