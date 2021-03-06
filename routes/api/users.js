const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/").get(usersController.findAll).post(usersController.create);

router
  .route("/:id")
  .get(usersController.findOne)
  .delete(usersController.delete)
  .put(usersController.update);


router.post("/add-project-to-user", usersController.addProjectToUser);
// users option to add to project
router.route("/Add/:exclude").get(usersController.findAllToAdd);
module.exports = router;
