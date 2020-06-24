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
  ,{
      where: {
        id: req.params.id
      }
    })
      .then(() => res.send(true))
      .catch((err) => res.status(422).json(err));
  }



};
    // //Update card within deck based off of id
    // app.put("/api/card/update/:id", function (req, res) {
    //     db.Card.update({
    //         front: req.body.front,
    //         back: req.body.back
    //     }, {
    //         where: {
    //             id: req.params.id
    //         }

    //     }).then(function () {
    //         res.json("Update")
    //     })
    // })

