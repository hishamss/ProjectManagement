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
  findAll: function (req, res) {
    db.Messages.findAll({
      where: { ProjectId: req.params.id },
      order: [["createdAt", "ASC"]],
      include: [
        {
          model: db.Users,
          attributes: ["name"],
        },
      ],
    })
      .then((data) => res.send(data))
      .catch(() => res.send(false));
  },
};
