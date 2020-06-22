const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.Projects.findAll({})
      .then((dbModel) => res.json(dbModel.map((row) => row.dataValues)))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Projects.create(req.body)
      .then(() => res.send(true))
      .catch((err) => res.status(422).json(err));
  },
  //   remove: function(req, res) {
  //     db.Projects
  //       .findById({ _id: req.params.id })
  //       .then(dbModel => dbModel.remove())
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   }
};
