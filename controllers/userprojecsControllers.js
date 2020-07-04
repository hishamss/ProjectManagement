const db = require("../models");
const { Op } = require("sequelize");
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
      .catch((err) => {
        res.send(err.name);
      });
  },
  updateStaus: (req, res) => {
    const AddInfo = req.params.addInfo.split("-");
    console.log(`from Email Info: ${AddInfo[0]}, ${AddInfo[1]}`);
    db.UserProjects.update(
      { status: "Active" },
      {
        where: {
          [Op.and]: [{ UserId: AddInfo[1] }, { ProjectId: AddInfo[0] }],
        },
      }
    )
      .then(() =>
        res.send(
          "<h1>Your status is active now, and you can start collaborating in the project"
        )
      )
      .catch((err) => console.log(err));
  },
};
