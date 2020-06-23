const router = require("express").Router();
const issuesController = require("../../controllers/issuesController");
// router : api/projects
router
  .route("/")
  .get(issuesController.findAll)
  .post(issuesController.create)
  .delete(issuesController.delete);

module.exports = router;
