"use strict";

const ctrlGallery = require("../controllers/gallery.controller");

module.exports = (app, jwtCheck, adminCheck) => {
  app.get("/api/admin/gallery", ctrlGallery.getGallery);

  app.get("/api/admin/gallery/:id", jwtCheck, ctrlGallery.getGalleryPhotoById);
  app.post("/api/admin/gallery", jwtCheck, adminCheck, ctrlGallery.create);
  app.put("/api/admin/gallery/update/:id",jwtCheck, adminCheck, ctrlGallery.update);
  app.delete("/api/admin/gallery/:id", jwtCheck, adminCheck, ctrlGallery.delete);


  /*
  app.get("/api/admin/gallery/:id", ctrlGallery.getGalleryPhotoById);
  app.post("/api/admin/gallery", ctrlGallery.create);
  app.put("/api/admin/gallery/update/:id", ctrlGallery.update);
  app.delete("/api/admin/gallery/:id", ctrlGallery.delete);
  */
};
