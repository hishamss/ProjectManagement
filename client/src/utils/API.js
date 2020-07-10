import axios from "axios";

export default {
  // Add User By Email
  sendEmail: function (email, projectId, projectTitle, AddUserId, PM) {
    return axios.get(
      `/api/email/${email}-${projectId}-${AddUserId}-${PM}-${projectTitle}`
    );
  },
  // get current user full name
  getUserInfo: function (firebaseId) {
    return axios.get(`/api/users/${firebaseId}`);
  },
  getUsersToAdd: function (excludeUser) {
    return axios.get(`/api/users/Add/${excludeUser}`);
  },
  addPendingUser: function (projectId, AddedUserId) {
    console.log("pending the user");
    return axios.get(`/api/user-projects/${projectId},${AddedUserId}`);
  },
  createProject: function (project) {
    return axios.post(`/api/projects/`, project);
  },

  getProjects: function (UserId) {
    console.log("USERUESR", UserId);
    return axios.get(`api/projects/${UserId}`);
  },

  deleteProject: function (projectId) {
    return axios.delete(`api/projects/${projectId}`);
  },
};
