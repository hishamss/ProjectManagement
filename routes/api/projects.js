const router = require("express").Router();
const projectsController = require("../../controllers/projectController");
const UserProjectsController = require("../../controllers/userprojecsControllers");
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

  // router.post('/add-user-to-project', projectsController.addUserToProject)

module.exports = router;
