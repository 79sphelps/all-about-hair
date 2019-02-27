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

const getServicesResponse = require("./services-response");
const getServices = require("./services-index").getServices;
const getServiceByID = require("./services-index").getServiceByID;
const createService = require("./services-index").createService;
const updateService = require("./services-index").updateService;
const deleteService = require("./services-index").deleteService;

// chai.use(chaiHttp);

// Parent Block
describe("Service", () => {
  describe("/GET services", () => {
    beforeEach(() => {
      nock("http://localhost:80")
        .get("/api/admin/services")
        .reply(200, getServicesResponse);
    });

    it("it should GET all services", () => {
      return getServices().then(res => {
        //expect an object back
        expect(typeof res).to.equal("object");

        //Test result of name, company and location for the response
        expect(res.length).to.be.not.equal(0);
        expect(res.length).to.be.equal(7);
        expect(res[0].title).to.equal("Haircut & Styling");
        expect(res[0].description).to.equal(
          "Custom cuts use same pricing scale. Enjoy a relaxing head, neck & shoulder massage, shampoo & style."
        );
        expect(res[0].image).to.equal("assets/images/haircut_utensils.png");
        expect(res[0].pricing.length).to.equal(6);
      });
    });
  });

  describe("/GET service", () => {
    let id = 1;
    let mockServiceResponse = {
      pricing: [
        { type: "Women's", price: "$40-$70", description: "description..." },
        { type: "Men's", price: "$30-$60", description: "description..." },
        {
          type: "Children (under 12)",
          price: "$25-$55",
          description: "description..."
        },
        { type: "Neck Trim", price: "$15", description: "description..." },
        { type: "Bang Trim", price: "$10", description: "description..." },
        {
          type: "Wash & Style",
          price: "$25-$55",
          description: "description..."
        }
      ],
      _id: "5b718d7d02f7fc1a68e9865b",
      title: "Haircut & Styling",
      description:
        "Custom cuts use same pricing scale. Enjoy a relaxing head, neck & shoulder massage, shampoo & style.",
      image: "assets/images/haircut_utensils.png",
      _id: "1"
    };

    beforeEach(() => {
      nock("http://localhost:80")
        .get(`/api/admin/services/${id}`)
        .reply(200, mockServiceResponse);
    });

    it("it should GET a service", () => {
      return getServiceByID(id).then(res => {
        //expect an object back
        expect(typeof res).to.equal("object");

        //Test result of name, company and location for the response
        expect(res.title).to.equal("Haircut & Styling");
        expect(res.description).to.equal(
          "Custom cuts use same pricing scale. Enjoy a relaxing head, neck & shoulder massage, shampoo & style."
        );
        expect(res.image).to.equal("assets/images/haircut_utensils.png");
        expect(res.pricing.length).to.equal(6);
      });
    });
  });

  describe("/POST service", () => {
    let mockServiceResponse = {
      pricing: [
        { type: "Women's", price: "$40-$70", description: "description..." },
        { type: "Men's", price: "$30-$60", description: "description..." },
        {
          type: "Children (under 12)",
          price: "$25-$55",
          description: "description..."
        },
        { type: "Neck Trim", price: "$15", description: "description..." },
        { type: "Bang Trim", price: "$10", description: "description..." },
        {
          type: "Wash & Style",
          price: "$25-$55",
          description: "description..."
        }
      ],
      _id: "5b718d7d02f7fc1a68e9865b",
      title: "Haircut & Styling",
      description:
        "Custom cuts use same pricing scale. Enjoy a relaxing head, neck & shoulder massage, shampoo & style.",
      image: "assets/images/haircut_utensils.png",
      _id: "1"
    };

    beforeEach(() => {
      nock("http://localhost:80")
        .post("/api/services/new")
        .reply(201, mockServiceResponse);
    });

    it("it should create a service", () => {
      let mockService = {
        pricing: [
          { type: "Women's", price: "$40-$70", description: "description..." },
          { type: "Men's", price: "$30-$60", description: "description..." },
          {
            type: "Children (under 12)",
            price: "$25-$55",
            description: "description..."
          },
          { type: "Neck Trim", price: "$15", description: "description..." },
          { type: "Bang Trim", price: "$10", description: "description..." },
          {
            type: "Wash & Style",
            price: "$25-$55",
            description: "description..."
          }
        ],
        _id: "5b718d7d02f7fc1a68e9865b",
        title: "Haircut & Styling",
        description:
          "Custom cuts use same pricing scale. Enjoy a relaxing head, neck & shoulder massage, shampoo & style.",
        image: "assets/images/haircut_utensils.png",
        _id: "1"
      };

      return createService(mockService).then(res => {
        //expect an object back
        expect(typeof res).to.equal("object");

        //Test result of name, company and location for the response
        expect(res.title).to.equal("Haircut & Styling");
        expect(res.description).to.equal(
          "Custom cuts use same pricing scale. Enjoy a relaxing head, neck & shoulder massage, shampoo & style."
        );
        expect(res.image).to.equal("assets/images/haircut_utensils.png");
        expect(res.pricing.length).to.equal(6);
      });
    });
  });

  describe("/PUT service", () => {
    let id = 1;

    let mockService = {
      title: "Test Service Title",
      description: "Test Service Description",
      image: "Test Service Image",
      pricing: [],
      _id: "1"
    };

    let mockServiceResponse = {
      title: "Test Service Title",
      description: "Test Service Description",
      image: "Test Service Image",
      pricing: [],
      _id: "1"
    };

    let mockServiceUpdatedResponse = {
      title: "Test Service Title Updated",
      description: "Test Service Description Updated",
      image: "Test Service Image Updated",
      pricing: [],
      _id: "1"
    };

    beforeEach(() => {
      nock("http://localhost:80")
        .persist()
        .post("/api/services/new", mockService)
        .reply(201, mockServiceResponse)
        .put("/api/admin/services/update/" + id, mockServiceUpdatedResponse)
        .reply(200, mockServiceUpdatedResponse);
    });

    it("it should update a service", () => {
      return updateService(id, mockServiceUpdatedResponse).then(res => {
        //expect an object back
        expect(typeof res).to.equal("object");

        //Test result of name, company and location for the response
        expect(res.title).to.equal("Test Service Title Updated");
        expect(res.description).to.equal("Test Service Description Updated");
        expect(res.image).to.equal("Test Service Image Updated");
        expect(res.pricing.length).to.equal(0);
      });
    });
  });

  describe("/DELETE service", () => {
    let id = 1;
    let mockServiceResponse = {
      title: "Test Service Title",
      description: "Test Service Description",
      image: "Test Service Image",
      pricing: [],
      _id: "1"
    };

    let mockServiceDeleteResponse = {
      message: "Service successfully deleted."
    };

    beforeEach(() => {
      nock("http://localhost:80")
        .persist()
        .post("/api/services/new")
        .reply(201, mockServiceResponse)
        .delete(`/api/admin/services/${id}`)
        .reply(200, mockServiceDeleteResponse);
    });

    it("it should delete a service", () => {
      return deleteService(id).then(res => {
        //expect an object back
        expect(typeof res).to.equal("object");
        expect(res.message).to.equal("Service successfully deleted.");
      });
    });
  });
});
