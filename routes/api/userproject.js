const router = require("express").Router();
const UserProjectsController = require("../../controllers/userprojecsControllers");
router.get("/:addInfo", UserProjectsController.addUserToProject);

module.exports = router;
