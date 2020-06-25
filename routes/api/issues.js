const router = require("express").Router();
const issuesController = require("../../controllers/issuesControllers");
// router : api/issues
router
    .route("/")
    .post(issuesController.create)
router
    .route("/:id")
    .get(issuesController.findAll)
    .delete(issuesController.delete)
    .put(issuesController.update);

module.exports = router;
