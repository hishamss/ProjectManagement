import axios from "axios";

export default {
  // Add User By Email
  sendEmail: function (email) {
    return axios.get(`/api/email/${email}`);
  },
  // get current user full name
  getUserInfo: function (firebaseId) {
    return axios.get(`/api/users/${firebaseId}`);
  },
  getUsersToAdd: function (excludeUser) {
    return axios.get(`/api/users/Add/${excludeUser}`);
  },
  addPendingUser: function (projectId, AddedUserId) {
    return axios.get(`api/projects/userProjects/${projectId},${AddedUserId}`);
  },
};
