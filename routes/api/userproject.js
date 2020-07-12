const router = require("express").Router();
const UserProjectsController = require("../../controllers/userprojecsControllers");
router.get("/:addInfo", UserProjectsController.addUserToProject);
router.put("/:info", UserProjectsController.leave);
router.get("/WhoIsAdded/:info", UserProjectsController.who);
router.delete("/:info", UserProjectsController.remove);
module.exports = router;
