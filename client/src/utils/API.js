import axios from "axios";

export default {
  // Add User By Email
  sendEmail: function (email) {
    return axios.get(`/api/email/${email}`);
  },
};
