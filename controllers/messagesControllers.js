const db = require("../models");

// Defining methods for the booksController
module.exports = {
  create: function (req, res) {
    console.log("hhhhh");
    console.log(req.body);
    db.Messages.create({
      message: req.body.message,
      UserId: req.body.userId,
      ProjectId: req.body.projectId,
    })
      .then((response) => {
        res.send(true);
      })
      .catch((err) => {
        res.status(422).json(err);
      });
  },
};
