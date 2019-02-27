const axios = require("axios");

module.exports = {
  getServices() {
    return axios
      .get(`/api/admin/services`)
      .then(res => res.data)
      .catch(error => console.log(error));
  },

  getServiceByID(id) {
    return axios
      .get(`/api/admin/services/${id}`)
      .then(res => res.data)
      .catch(err => console.log(err));
  },

  createService(appt) {
    return axios
      .post(`/api/services/new`, appt)
      .then(res => res.data)
      .catch(err => console.log(err));
  },

  updateService(id, appt) {
    return axios
      .put(`/api/admin/services/update/${id}`, appt)
      .then(res => res.data)
      .catch(err => console.log(err));
  },

  deleteService(id) {
    return axios
      .delete(`/api/admin/services/${id}`)
      .then(res => res.data)
      .catch(err => console.log(err));
  }
};
