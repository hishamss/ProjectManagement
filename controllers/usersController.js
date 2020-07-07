const db = require("../models");
const { Op } = require("sequelize");
module.exports = {
    //This is finding a specified user by the primary key
    // and including the projects associated with that user
    findOne: function (req, res) {
        const { id } = req.params;
        db.Users.findOne({
            //Including the db.user model
            //The through key is a way to access the join table (userprojects)
            where: {
              firebaseId: id 
            },
            
            include: [
                {
                    model: db.Projects,
                    through: {
                        attributes: []
                    }
                    
                }
            ]
        })
            .then(user => {
                res.send(user);
            })
            .catch((err) => {
                console.log("findone ==>>>>>>", err )
                res.status(422).json(err)
            });
    },
    findAll: function (req, res) {
        db.Users.findAll({})
            .then(users => res.send(users))
            .catch((err) => res.status(422).json(err));
    },
    //This is where the req.body needs to include
    // the firebase ID from the client
    create: function (req, res) {
        db.Users.create(req.body)
            .then((user) => res.send(user))
            .catch((err) => res.status(422).json(err));
    },
    delete: function (req, res) {
        db.Users.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => res.send({ success: 'User deleted' }))
            .catch((err) => res.status(422).json(err));
    },
    //Updating the user information and then 
    // returning back the updated user information
    update: function (req, res) {
        db.Users.update(req.body, {
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                db.Users.findOne({ where: { id: req.params.id } }).then(user => {
                    res.send(user);
                }).catch((err) => res.status(422).json(err));
            })
            .catch((err) => res.status(422).json(err));
    },
    addProject: async (req, res) => {
        const { firebaseId, projectId } = req.body
        await this.addProjectToUser(firebaseId, projectId);
        res.send({ message: 'Project added sucessfully...' })
    },

    addProjectToUser: async (firebaseId, projectId) => {
        try {
            const user = await db.Users.findOne({ where: { firebaseId } });
            await user.addProject(projectId)
        } catch (err) {
            return err;
        };

    }
};
