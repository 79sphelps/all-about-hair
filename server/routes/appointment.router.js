"use strict";

const ctrlAppointments = require("../controllers/appointments.controller");

module.exports = (app, jwtCheck, adminCheck) => {
  app.get("/api/admin/appointments", ctrlAppointments.getAppointments);

  app.get(
    "/api/admin/appointments/:id",
    jwtCheck,
    adminCheck,
    ctrlAppointments.getAppointmentById
  );

  app.post("/api/appointments/new", ctrlAppointments.create);
  app.put(
    "/api/admin/appointments/update/:id",
    jwtCheck,
    adminCheck,
    ctrlAppointments.update
  );
  app.delete(
    "/api/admin/appointments/:id",
    jwtCheck,
    adminCheck,
    ctrlAppointments.destroy
  );

  /*
  app.get(
    "/api/admin/appointments/:id",
    ctrlAppointments.getAppointmentById
  );
  app.post("/api/appointments/new", ctrlAppointments.create);
  app.put(
    "/api/admin/appointments/update/:id",
    ctrlAppointments.update
  );
  app.delete(
    "/api/admin/appointments/:id",
    ctrlAppointments.destroy
  );
  */
};
