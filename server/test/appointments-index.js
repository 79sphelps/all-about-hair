const axios = require("axios");

module.exports = {
  getAppointments() {
    return axios
      .get(`/api/admin/appointments`)
      .then(res => res.data)
      .catch(error => console.log(error));
  },

  getAppointment(id) {
    return axios
      .get(`/api/admin/appointments/${id}`)
      .then(res => res.data)
      .catch(err => console.log(err));
  },

  createAppointment(appt) {
    return axios
      .post(`/api/appointments/new`, appt)
      .then(res => res.data)
      .catch(err => console.log(err));
  },

  updateAppointment(id, appt) {
    return axios
      .put(`/api/admin/appointments/update/${id}`, appt)
      .then(res => res.data)
      .catch(err => console.log(err));
  },

  deleteAppointment(id) {
    return axios
      .delete(`/api/admin/appointments/${id}`)
      .then(res => res.data)
      .catch(err => console.log(err));
  }
};
