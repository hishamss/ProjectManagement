const db = require("../models");

// Defining methods for the booksController
module.exports = {



  findAll: function (req, res) {
    db.Issues.findAll({
        where: {
            projectId: req.params.projectId
        }
    })
      .then((dbModel) => res.json(dbModel.map((row) => row.dataValues)))
      .catch((err) => res.status(422).json(err));
  },
// app.post("/api/new/comment", function (req, res) {
//     db.Comment.create({
//         id: req.body.id,
//         comments: req.body.comments,
//         userId: req.body.userId,
//         BlogId: req.body.blogId
//     }).then(function (result) {
//         console.log("Inserted into Comments table");
//         res.json(result);
//     }).catch(function (err) {
//         console.log(err);
//     })
// })
  create: function (req, res) {
    db.Issues.create({
       
           id: req.body.id,
           task: req.body.task,
           userId: req.body.userId,
          projectId: req.body.projectId
           
        
    })
      .then(() => res.send(true))
      .catch((err) => res.status(422).json(err));
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
      userId: req.body.userId
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

