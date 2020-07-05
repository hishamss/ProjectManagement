const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/").get(usersController.findAll).post(usersController.create);

router
  .route("/:id")
  .get(usersController.findOne)
  .delete(usersController.delete)
  .put(usersController.update);

  router
    .route("/addproject")
    .put(usersController.addProject)

  // router.post('/add-project-to-user', usersController.addProjectToUser)

module.exports = router;
