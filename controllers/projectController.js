const db = require("../models");


module.exports = {
  //This is finding a specified project by the primary key
  // and including the users associated with that project
  findOne: function (req, res) {
    const { id } = req.params;
    db.Projects.findByPk(id, {
      //Including the db.user model
      //The through key is a way to access the join table (userprojects)
      // We are setting the userprojects table is set to blank, its more organized
      include: [
        {
          model: db.User,
          as: 'users',
          through: {
            attributes: []
          }
        }
      ]
    })
      .then(project => {
        res.send(project);
      })
      .catch((err) => {
        res.status(422).json(err)
      });
  },
  findAll: function (req, res) {
    db.Projects.findAll({})
      .then((dbModel) => res.json(dbModel.map((row) => row.dataValues)))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Projects.create(req.body)
      .then((project) => res.send(project))
      .catch((err) => res.status(422).json(err));
  },
  delete: function (req, res) {
    db.Projects.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(() => res.send(true))
      .catch((err) => res.status(422).json(err));
  },

  update: function (req, res) {
    db.Projects.update({
      projectTitle: req.body.projectTitle,
      projectDescription: req.body.projectDescription
    }
      , {
        where: {
          id: req.params.id
        }
      })
      .then(() => res.send(true))
      .catch((err) => res.status(422).json(err));
  },
  //Find the project with the corresponding primary key
  //Add the user to the project. 
  addUserToProject: (req, res) => {
    const { userId, projectId } = req.body;
    db.Projects.findByPk(projectId)
      .then(project => {
        project.addUser(userId).then(() => {
          res.send({ success: 'User added to Project' })
        }).catch((err) => res.status(422).json(err));
      })
      .catch((err) => res.status(422).json(err));
  }
};


