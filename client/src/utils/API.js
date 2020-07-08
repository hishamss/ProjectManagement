import axios from "axios";

export default {
  // Add User By Email
  sendEmail: function (email, projectId, AddUserId, PM) {
    return axios.get(`/api/email/${email}-${projectId}-${AddUserId}-${PM}`);
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
  createProject: function (project) {
    return axios.post(`api/projects/`, project);
  },

  getProjects: function (UserId) {
    console.log("USERUESR", UserId);
    return axios.get(`api/projects/${UserId}`);
  },
};
