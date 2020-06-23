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
      where: {
        id: req.params.id
      }
    })
      .then(() => res.send(true))
      .catch((err) => res.status(422).json(err));
  }



};
// app.delete("/api/decks/:id", function (req, res) {
//   db.Deck.destroy({
//       where: {
//           id: req.params.id
//       }
//   }).then(function (dbDeck) {
//       res.json(dbDeck);
//   });
// })

