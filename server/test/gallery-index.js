const axios = require("axios");

module.exports = {
  getGallery() {
    return axios
      .get(`/api/admin/gallery`)
      .then(res => res.data)
      .catch(error => console.log(error));
  },

  getGalleryImage(id) {
    return axios
      .get(`/api/admin/gallery/${id}`)
      .then(res => res.data)
      .catch(err => console.log(err));
  },

  createGalleryImage(appt) {
    return axios
      .post(`/api/admin/gallery/new`, appt)
      .then(res => res.data)
      .catch(err => console.log(err));
  },

  updateGalleryImage(id, appt) {
    return axios
      .put(`/api/admin/gallery/update/${id}`, appt)
      .then(res => res.data)
      .catch(err => console.log(err));
  },

  deleteGalleryImage(id) {
    return axios
      .delete(`/api/admin/gallery/${id}`)
      .then(res => res.data)
      .catch(err => console.log(err));
  }
};
