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

const getPersonelResponse = require("./personel-response");
const getPersonel = require("./personel-index").getPersonel;
const getPersoneByID = require("./personel-index").getPersonelByID;
const createPersonel = require("./personel-index").createPersonel;
const updatePersonel = require("./personel-index").updatePersonel;
const deletePersonel = require("./personel-index").deletePersonel;

// chai.use(chaiHttp);

// Parent Block
describe("Personel", () => {
  describe("/GET personel", () => {
    beforeEach(() => {
      nock("http://localhost:80")
        .get("/api/admin/personel")
        .reply(200, getPersonelResponse);
    });

    it("it should GET all personel", () => {
      return getPersonel().then(res => {
        //expect an object back
        expect(typeof res).to.equal("object");

        //Test result of name, company and location for the response
        expect(res.length).to.be.not.equal(0);
        expect(res.length).to.be.equal(5);
        expect(res[1].name).to.equal("Ethel Davis");
        expect(res[1].role).to.equal(
          "Senior Stylist/Xtreme Lash Stylist/Vomor Extension Certified Stylist"
        );
        expect(res[1].bio).to.equal(
          "Ethel has been in the hair & beauty industry professionally since 2009 and has been and Aveda stylist since 2011. His range of ability is very wide, from needs of fine hair to the complexities of dense curly hair. He's passionate about continuing education & loves to create soft blended layers, short textured pixie cuts, multidimensional color, beautiful blondes, and hair painting techniques such as balayage."
        );
        expect(res[1].photo).to.equal("assets/images/img_5.jpg");
      });
    });
  });

  describe("/GET personel", () => {
    let id = 1;
    let mockPersonelResponse = {
      name: "Test Personel Name",
      role: "Test Personel Role",
      bio: "Test Personel Bio",
      photo: "Test Personel Photo",
      _id: "1"
    };

    beforeEach(() => {
      nock("http://localhost:80")
        .get(`/api/admin/personel/${id}`)
        .reply(200, mockPersonelResponse);
    });

    it("it should GET an personel", () => {
      return getPersoneByID(id).then(res => {
        //expect an object back
        expect(typeof res).to.equal("object");

        //Test result of name, company and location for the response
        expect(res.name).to.equal("Test Personel Name");
        expect(res.role).to.equal("Test Personel Role");
        expect(res.bio).to.equal("Test Personel Bio");
        expect(res.photo).to.equal("Test Personel Photo");
      });
    });
  });

  describe("/POST personel", () => {
    let mockPersonelResponse = {
      name: "Test Personel Name",
      role: "Test Personel Role",
      bio: "Test Personel Bio",
      photo: "Test Personel Photo",
      _id: "1"
    };

    beforeEach(() => {
      nock("http://localhost:80")
        .post("/api/admin/personel/new")
        .reply(201, mockPersonelResponse);
    });

    it("it should create an personel", () => {
      let mockPersonel = {
        name: "Test Personel Name",
        role: "Test Personel Role",
        bio: "Test Personel Bio",
        photo: "Test Personel Photo",
        _id: "1"
      };

      return createPersonel(mockPersonel).then(res => {
        //expect an object back
        expect(typeof res).to.equal("object");

        //Test result of name, company and location for the response
        expect(res.name).to.equal("Test Personel Name");
        expect(res.role).to.equal("Test Personel Role");
        expect(res.bio).to.equal("Test Personel Bio");
        expect(res.photo).to.equal("Test Personel Photo");
      });
    });
  });

  describe("/PUT personel", () => {
    let id = 1;

    let mockPersonel = {
      name: "Test Personel Name",
      role: "Test Personel Role",
      bio: "Test Personel Bio",
      photo: "Test Personel Photo",
      _id: "1"
    };

    let mockPersonelResponse = {
      name: "Test Personel Name",
      role: "Test Personel Role",
      bio: "Test Personel Bio",
      photo: "Test Personel Photo",
      _id: "1"
    };

    let mockPersonelUpdatedResponse = {
      name: "Test Personel Name Updated",
      role: "Test Personel Role Updated",
      bio: "Test Personel Bio Updated",
      photo: "Test Personel Photo Updated",
      _id: "1"
    };

    beforeEach(() => {
      nock("http://localhost:80")
        .persist()
        .post("/api/admin/personel/new", mockPersonel)
        .reply(201, mockPersonelResponse)
        .put("/api/admin/personel/update/" + id, mockPersonelUpdatedResponse)
        .reply(200, mockPersonelUpdatedResponse);
    });

    it("it should update an personel", () => {
      return updatePersonel(id, mockPersonelUpdatedResponse).then(res => {
        //expect an object back
        expect(typeof res).to.equal("object");

        //Test result of name, company and location for the response
        expect(res.name).to.equal("Test Personel Name Updated");
        expect(res.role).to.equal("Test Personel Role Updated");
        expect(res.bio).to.equal("Test Personel Bio Updated");
        expect(res.photo).to.equal("Test Personel Photo Updated");
      });
    });
  });

  describe("/DELETE personel", () => {
    let id = 1;
    let mockPersonelResponse = {
      name: "Test Personel Name",
      role: "Test Personel Role",
      bio: "Test Personel Bio",
      photo: "Test Personel Photo",
      _id: "1"
    };

    let mockPersonelDeleteResponse = {
      message: "Personel successfully deleted."
    };

    beforeEach(() => {
      nock("http://localhost:80")
        .persist()
        .post("/api/admin/personel/new")
        .reply(201, mockPersonelResponse)
        .delete(`/api/admin/personel/${id}`)
        .reply(200, mockPersonelDeleteResponse);
    });

    it("it should delete an personel", () => {
      return deletePersonel(id).then(res => {
        //expect an object back
        expect(typeof res).to.equal("object");
        expect(res.message).to.equal("Personel successfully deleted.");
      });
    });
  });
});
