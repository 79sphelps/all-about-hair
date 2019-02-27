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

const getApptResponse = require("./appointments-response");
const getAppointments = require("./appointments-index").getAppointments;
const getAppointment = require("./appointments-index").getAppointment;
const createAppointment = require("./appointments-index").createAppointment;
const updateAppointment = require("./appointments-index").updateAppointment;
const deleteAppointment = require("./appointments-index").deleteAppointment;

// chai.use(chaiHttp);

describe("First test", () => {
  it("Should assert true to be true", () => {
    expect(true).to.be.true;
  });
});

// Parent Block
describe("Appointments", () => {
  describe("/GET appointments", () => {
    beforeEach(() => {
      nock("http://localhost:80")
        .get("/api/admin/appointments")
        .reply(200, getApptResponse);
    });

    it("it should GET all the appointments", () => {
      return getAppointments().then(res => {
        //expect an object back
        expect(typeof res).to.equal("object");

        //Test result of name, company and location for the response
        expect(res.length).to.be.not.equal(0);
        expect(res.length).to.be.equal(7);
        expect(res[0].name).to.equal("Bill Nye");
        expect(res[0].email).to.equal("bill@gmail.com");
        expect(res[0].message).to.equal(
          "Do you offer salon packages as gifts?"
        );
        expect(res[0].category).to.equal("gift packages");
      });
    });
  });

  describe("/GET appointment", () => {
    let id = 1;
    let mockApptResponse = {
      name: "Test Name",
      email: "Test Email",
      category: "Test Category",
      message: "Test Message",
      _id: "1"
    };

    beforeEach(() => {
      nock("http://localhost:80")
        .get(`/api/admin/appointments/${id}`)
        .reply(200, mockApptResponse);
    });

    it("it should GET an appointment", () => {
      return getAppointment(id).then(res => {
        //expect an object back
        expect(typeof res).to.equal("object");

        //Test result of name, company and location for the response
        expect(res.name).to.equal("Test Name");
        expect(res.email).to.equal("Test Email");
        expect(res.message).to.equal("Test Message");
        expect(res.category).to.equal("Test Category");
      });
    });
  });

  describe("/POST appointment", () => {
    let mockApptResponse = {
      name: "Test Name",
      email: "Test Email",
      category: "Test Category",
      message: "Test Message",
      _id: "1"
    };

    beforeEach(() => {
      nock("http://localhost:80")
        .post("/api/appointments/new")
        .reply(201, mockApptResponse);
    });

    it("it should create an appointment", () => {
      let mockAppt = {
        name: "Test Name",
        email: "Test Email",
        category: "Test Category",
        message: "Test Message",
        _id: "1"
      };

      return createAppointment(mockAppt).then(res => {
        //expect an object back
        expect(typeof res).to.equal("object");

        //Test result of name, company and location for the response
        expect(res.name).to.equal("Test Name");
        expect(res.email).to.equal("Test Email");
        expect(res.message).to.equal("Test Message");
        expect(res.category).to.equal("Test Category");
      });
    });
  });

  describe("/PUT appointment", () => {
    let id = 1;

    let mockAppt = {
      name: "Test Name",
      email: "Test Email",
      category: "Test Category",
      message: "Test Message",
      _id: "1"
    };

    let mockApptResponse = {
      name: "Test Name",
      email: "Test Email",
      category: "Test Category",
      message: "Test Message",
      _id: "1"
    };

    let mockApptUpdatedResponse = {
      name: "Test Name Updated",
      email: "Test Email Updated",
      category: "Test Category Updated",
      message: "Test Message Updated",
      _id: "1"
    };

    beforeEach(() => {
      nock("http://localhost:80")
        .persist()
        .post("/api/appointments/new", mockAppt)
        .reply(201, mockApptResponse)
        .put("/api/admin/appointments/update/" + id, mockApptUpdatedResponse)
        .reply(200, mockApptUpdatedResponse);
    });

    it("it should update an appointment", () => {
      return updateAppointment(id, mockApptUpdatedResponse).then(res => {
        //expect an object back
        expect(typeof res).to.equal("object");

        //Test result of name, company and location for the response
        expect(res.name).to.equal("Test Name Updated");
        expect(res.email).to.equal("Test Email Updated");
        expect(res.message).to.equal("Test Message Updated");
        expect(res.category).to.equal("Test Category Updated");
      });
    });
  });

  describe("/DELETE appointment", () => {
    let id = 1;

    let mockApptResponse = {
      name: "Test Name",
      email: "Test Email",
      category: "Test Category",
      message: "Test Message",
      _id: "1"
    };

    let mockApptDeleteResponse = {
      message: "Appointment successfully deleted."
    };

    beforeEach(() => {
      nock("http://localhost:80")
        .persist()
        .post("/api/appointments/new")
        .reply(201, mockApptResponse)
        .delete(`/api/admin/appointments/${id}`)
        .reply(200, mockApptDeleteResponse);
    });

    it("it should delete an appointment", () => {
      return deleteAppointment(id).then(res => {
        //expect an object back
        expect(typeof res).to.equal("object");
        expect(res.message).to.equal("Appointment successfully deleted.");
      });
    });
  });
});
