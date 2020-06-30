const db = require("../models");

module.exports = {
  //This is finding a specified user by the primary key
  // and including the projects associated with that user
  findOne: function (req, res) {
    const { id } = req.params;
    db.User.findByPk(id, {
      //Including the db.user model
      //The through key is a way to access the join table (userprojects)
      // We are setting the userprojects table is set to blank, its more organized
      include: [
        {
          model: db.Projects,
          as: "projects",
          through: {
            attributes: [],
          },
        },
      ],
    })
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(422).json(err);
      });
  },
  findAll: function (req, res) {
    db.User.findAll({})
      .then((users) => res.send(users))
      .catch((err) => res.status(422).json(err));
  },
  //This is where the req.body needs to include
  // the firebase ID from the client
  create: function (req, res) {
    console.log("from UsersController: ", req.body);
    db.User.create(req.body)
      .then((user) => res.send(user))
      .catch((err) => res.status(422).json(err));
  },
  delete: function (req, res) {
    db.User.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => res.send({ success: "User deleted" }))
      .catch((err) => res.status(422).json(err));
  },
  //Updating the user information and then
  // returning back the updated user information
  update: function (req, res) {
    db.User.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then(() => {
        db.User.findOne({ where: { id: req.params.id } })
          .then((user) => {
            res.send(user);
          })
          .catch((err) => res.status(422).json(err));
      })
      .catch((err) => res.status(422).json(err));
  },
  //Find the user with the corresponding primary key
  //Add the project to the user.
  addProjectToUser: (req, res) => {
    const { userId, projectId } = req.body;
    db.User.findByPk(userId)
      .then((user) => {
        user
          .addProject(projectId)
          .then(() => {
            res.send({ success: "Project added to User" });
          })
          .catch((err) => res.status(422).json(err));
      })
      .catch((err) => res.status(422).json(err));
  },
};
