const axios = require("axios");

module.exports = {
  getRequests() {
    return axios
      .get(`/api/admin/requests`)
      .then(res => res.data)
      .catch(error => console.log(error));
  },

  getRequestByID(id) {
    return axios
      .get(`/api/admin/requests/${id}`)
      .then(res => res.data)
      .catch(err => console.log(err));
  },

  createRequest(appt) {
    return axios
      .post(`/api/requests/new`, appt)
      .then(res => res.data)
      .catch(err => console.log(err));
  },

  updateRequest(id, appt) {
    return axios
      .put(`/api/admin/requests/update/${id}`, appt)
      .then(res => res.data)
      .catch(err => console.log(err));
  },

  deleteRequest(id) {
    return axios
      .delete(`/api/admin/requests/${id}`)
      .then(res => res.data)
      .catch(err => console.log(err));
  }
};
