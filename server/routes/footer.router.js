"use strict";

const ctrlFooter = require(appRoot + "/server/controllers/footer.controller");

module.exports = (app, jwtCheck, adminCheck) => {
  app.get("/api/admin/footerAbout", ctrlFooter.getFooterInfo);
//   app.get("/api/admin/footerAbout/:id", jwtCheck, ctrlContact.getContactInfoById);
  //app.post('/api/admin/contact', jwtCheck, adminCheck, ctrlContact.create);
  app.put(
    "/api/admin/footerAbout/update/:id",
    jwtCheck,
    adminCheck,
    ctrlFooter.update
  );
  //app.delete('/api/admin/contact/:id', jwtCheck, adminCheck, ctrlContact.delete);
};
