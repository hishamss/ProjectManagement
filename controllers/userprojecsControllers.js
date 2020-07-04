const db = require("../models");

module.exports = {
  //Add the user to the project.
  addUserToProject: (req, res) => {
    const UserInfo = req.params.addInfo.split(",");
    const projectId = UserInfo[0];
    const userId = UserInfo[1];
    db.UserProjects.create({
      ProjectId: projectId,
      UserId: userId,
    })
      .then((response) => res.send(response))
      .catch((err) => res.status(422).json(err));
  },
};
