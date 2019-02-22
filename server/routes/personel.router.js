"use strict";

const ctrlPersonel = require("../controllers/personel.controller");

module.exports = (app, jwtCheck, adminCheck) => {
  app.get("/api/admin/personel", ctrlPersonel.getPersonel);

  app.get("/api/admin/personel/:id", jwtCheck, ctrlPersonel.getPersonelById);
  app.post("/api/admin/personel", jwtCheck, adminCheck, ctrlPersonel.create);
  app.put(
    "/api/admin/personel/update/:id",
    jwtCheck,
    adminCheck,
    ctrlPersonel.update
  );
  app.delete(
    "/api/admin/personel/:id",
    jwtCheck,
    adminCheck,
    ctrlPersonel.delete
  );


  /*
  app.get("/api/admin/personel/:id", ctrlPersonel.getPersonelById);
  app.post("/api/admin/personel", ctrlPersonel.create);
  app.put(
    "/api/admin/personel/update/:id",
    ctrlPersonel.update
  );
  app.delete(
    "/api/admin/personel/:id",
    ctrlPersonel.delete
  );
  */
};
