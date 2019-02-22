"use strict";

const ctrlRequests = require("../controllers/request.controller");

module.exports = (app, jwtCheck, adminCheck) => {
  app.get("/api/admin/requests", ctrlRequests.getRequests);

  app.get("/api/admin/requests/:id", jwtCheck, ctrlRequests.getRequestById);
  app.post("/api/requests/new", ctrlRequests.create);
  app.put(
    "/api/admin/requests/update/:id",
    jwtCheck,
    adminCheck,
    ctrlRequests.update
  );
  app.delete(
    "/api/admin/requests/:id",
    jwtCheck,
    adminCheck,
    ctrlRequests.delete
  );

  /*
  app.get("/api/admin/requests/:id", ctrlRequests.getRequestById);
  app.post("/api/requests/new", ctrlRequests.create);
  app.put(
    "/api/admin/requests/update/:id",
    ctrlRequests.update
  );
  app.delete(
    "/api/admin/requests/:id",
    ctrlRequests.delete
  );
  */
};
