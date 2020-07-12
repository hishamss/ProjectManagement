const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Issues.findAll({
      where: {
        projectId: req.params.id
      }
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Issues.create({
      task: req.body.task,
      assignedTo: req.body.assignedTo,
      status: req.body.status,
      projectId: req.body.projectId
    })
      .then(issue => {
        res.send(issue);
      })
      .catch((err) => {
        res.status(422).json(err)
      });
  },

  delete: function (req, res) {
    db.Issues.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(() => res.send(true))
      .catch((err) => res.status(422).json(err));
  },

  update: function (req, res) {
    db.Issues.update({
      task: req.body.task,
      status: req.body.status
    }
      , {
        where: {
          id: req.params.id
        },
      })
      .then(() => {
        db.Issues.findOne({where: {id: req.params.id}}).then(issue => {
          res.send(issue);
        }).catch((err) => res.status(422).json(err));
      })
      .catch((err) => res.status(422).json(err));
  }



};

