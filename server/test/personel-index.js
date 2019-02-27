const axios = require("axios");

module.exports = {
  getPersonel() {
    return axios
      .get(`/api/admin/personel`)
      .then(res => res.data)
      .catch(error => console.log(error));
  },

  getPersonelByID(id) {
    return axios
      .get(`/api/admin/personel/${id}`)
      .then(res => res.data)
      .catch(err => console.log(err));
  },

  createPersonel(appt) {
    return axios
      .post(`/api/admin/personel/new`, appt)
      .then(res => res.data)
      .catch(err => console.log(err));
  },

  updatePersonel(id, appt) {
    return axios
      .put(`/api/admin/personel/update/${id}`, appt)
      .then(res => res.data)
      .catch(err => console.log(err));
  },

  deletePersonel(id) {
    return axios
      .delete(`/api/admin/personel/${id}`)
      .then(res => res.data)
      .catch(err => console.log(err));
  }
};
