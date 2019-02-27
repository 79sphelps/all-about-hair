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

const getRequestsResponse = require("./requests-response");
const getRequests = require("./requests-index").getRequests;
const getRequestByID = require("./requests-index").getRequestByID;
const createRequest = require("./requests-index").createRequest;
const updateRequest = require("./requests-index").updateRequest;
const deleteRequest = require("./requests-index").deleteRequest;

// chai.use(chaiHttp);

// Parent Block
describe("Request", () => {
  describe("/GET requests", () => {
    beforeEach(() => {
      nock("http://localhost:80")
        .get("/api/admin/requests")
        .reply(200, getRequestsResponse);
    });

    it("it should GET all requests", () => {
      return getRequests().then(res => {
        //expect an object back
        expect(typeof res).to.equal("object");

        //Test result of name, company and location for the response
        expect(res.length).to.be.not.equal(0);
        expect(res.length).to.be.equal(3);
        expect(res[0].name).to.equal("Bill Nye");
        expect(res[0].email).to.equal("bill@gmail.com");
        expect(res[0].message).to.equal(
          "Do you offer salon packages as gifts?"
        );
        expect(res[0].category).to.equal("gift packages");
      });
    });
  });

  describe("/GET request", () => {
    let id = 1;
    let mockRequestResponse = {
      name: "Test Request Name",
      email: "Test Request Email",
      message: "Test Request Message",
      category: "Test Request Category",
      _id: "1"
    };

    beforeEach(() => {
      nock("http://localhost:80")
        .get(`/api/admin/requests/${id}`)
        .reply(200, mockRequestResponse);
    });

    it("it should GET a request", () => {
      return getRequestByID(id).then(res => {
        //expect an object back
        expect(typeof res).to.equal("object");

        //Test result of name, company and location for the response
        expect(res.name).to.equal("Test Request Name");
        expect(res.email).to.equal("Test Request Email");
        expect(res.message).to.equal("Test Request Message");
        expect(res.category).to.equal("Test Request Category");
      });
    });
  });

  describe("/POST request", () => {
    let mockRequestResponse = {
      name: "Test Request Name",
      email: "Test Request Email",
      message: "Test Request Message",
      category: "Test Request Category",
      _id: "1"
    };

    beforeEach(() => {
      nock("http://localhost:80")
        .post("/api/requests/new")
        .reply(201, mockRequestResponse);
    });

    it("it should create a request", () => {
      let mockRequest = {
        name: "Test Request Name",
        email: "Test Request Email",
        message: "Test Request Message",
        category: "Test Request Category",
        _id: "1"
      };

      return createRequest(mockRequest).then(res => {
        //expect an object back
        expect(typeof res).to.equal("object");

        //Test result of name, company and location for the response
        expect(res.name).to.equal("Test Request Name");
        expect(res.email).to.equal("Test Request Email");
        expect(res.message).to.equal("Test Request Message");
        expect(res.category).to.equal("Test Request Category");
      });
    });
  });

  describe("/PUT request", () => {
    let id = 1;

    let mockRequest = {
      name: "Test Request Name",
      email: "Test Request Email",
      message: "Test Request Message",
      category: "Test Request Category",
      _id: "1"
    };

    let mockRequestResponse = {
      name: "Test Request Name",
      email: "Test Request Email",
      message: "Test Request Message",
      category: "Test Request Category",
      _id: "1"
    };

    let mockRequestUpdatedResponse = {
      name: "Test Request Name Updated",
      email: "Test Request Email Updated",
      message: "Test Request Message Updated",
      category: "Test Request Category Updated",
      _id: "1"
    };

    beforeEach(() => {
      nock("http://localhost:80")
        .persist()
        .post("/api/requests/new", mockRequest)
        .reply(201, mockRequestResponse)
        .put("/api/admin/requests/update/" + id, mockRequestUpdatedResponse)
        .reply(200, mockRequestUpdatedResponse);
    });

    it("it should update a request", () => {
      return updateRequest(id, mockRequestUpdatedResponse).then(res => {
        //expect an object back
        expect(typeof res).to.equal("object");

        //Test result of name, company and location for the response
        expect(res.name).to.equal("Test Request Name Updated");
        expect(res.email).to.equal("Test Request Email Updated");
        expect(res.message).to.equal("Test Request Message Updated");
        expect(res.category).to.equal("Test Request Category Updated");
      });
    });
  });

  describe("/DELETE request", () => {
    let id = 1;
    let mockRequestResponse = {
      name: "Test Request Name",
      email: "Test Request Email",
      message: "Test Request Message",
      category: "Test Request Category",
      _id: "1"
    };

    let mockRequestDeleteResponse = {
      message: "Request successfully deleted."
    };

    beforeEach(() => {
      nock("http://localhost:80")
        .persist()
        .post("/api/requests/new")
        .reply(201, mockRequestResponse)
        .delete(`/api/admin/requests/${id}`)
        .reply(200, mockRequestDeleteResponse);
    });

    it("it should delete a request", () => {
      return deleteRequest(id).then(res => {
        //expect an object back
        expect(typeof res).to.equal("object");
        expect(res.message).to.equal("Request successfully deleted.");
      });
    });
  });
});
