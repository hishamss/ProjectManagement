const router = require("express").Router();
const projectsController = require("../../controllers/projectController");
// router : api/projects
router
  .route("/")
  .get(projectsController.findAll)
  .post(projectsController.create)

router
  .route("/:id")
  .get(projectsController.findOne)
  .delete(projectsController.delete)
  .put(projectsController.update);

  router.post('/add-user-to-project', projectsController.addUserToProject)

module.exports = router;
