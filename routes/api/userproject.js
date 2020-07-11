const router = require("express").Router();
const UserProjectsController = require("../../controllers/userprojecsControllers");
router.get("/:addInfo", UserProjectsController.addUserToProject);
router.put("/:info", UserProjectsController.leave);
router.get("/WhoIsAdded/:projectId", UserProjectsController.who);
module.exports = router;
