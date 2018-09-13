"use strict";

const ctrlHomepage = require("../controllers/homepage.controller");

module.exports = (app, jwtCheck, adminCheck) => {
  app.get("/api/admin/homepage", ctrlHomepage.getHomepage);
  app.get("/api/admin/homepage/:id", jwtCheck, ctrlHomepage.getHomepageById);
  //app.post("/homepage", jwtCheck, adminCheck, ctrlHomepage.create);
  app.put(
    "/api/admin/homepage/update/:id",
    jwtCheck,
    adminCheck,
    ctrlHomepage.update
  );
  //app.delete("/homepage/:id", jwtCheck, adminCheck, ctrlHomepage.delete);
};
