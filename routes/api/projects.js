const router = require("express").Router();
const projectsController = require("../../controllers/projectController");
const UserProjectsController = require("../../controllers/userprojecsControllers");
const projectController = require("../../controllers/projectController");
// router : api/projects
router
  .route("/")
  .get(projectsController.findAll)
  .post(projectsController.create);

// Email router for adding users to projects
router.get("/adduser/:addInfo", UserProjectsController.updateStaus);
router
  .route("/:id")
  .get(projectsController.findOne)
  .delete(projectsController.delete)
  .put(projectsController.update);

module.exports = router;
