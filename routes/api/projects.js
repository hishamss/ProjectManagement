const router = require("express").Router();
const projectsController = require("../../controllers/projectController");
const UserProjectsController = require("../../controllers/userprojecsControllers");
// router : api/projects
router
  .route("/")
  .get(projectsController.findAll)
  .post(projectsController.create);

// Email router for adding users to projects
router.route("/adduser/:user").get((req, res) => {
  console.log(`from Email: ${req.params.user}`);
  res.send("you have been Added");
});
router
  .route("/:id")
  .get(projectsController.findOne)
  .delete(projectsController.delete)
  .put(projectsController.update);

router.get("/userProjects/:addInfo", UserProjectsController.addUserToProject);

module.exports = router;
