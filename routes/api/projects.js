const router = require("express").Router();
const projectsController = require("../../controllers/projectController");
// router : api/projects
router
  .route("/")
  .get(projectsController.findAll)
  .post(projectsController.create)

router
  .route("/:id")
  .delete(projectsController.delete)
  .put(projectsController.update);


module.exports = router;
