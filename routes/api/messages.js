const router = require("express").Router();
const MessagesController = require("../../controllers/messagesControllers");
// router : api/issues
router.route("/").post(MessagesController.create);
router.route("/:id").get(MessagesController.findAll);
//     .delete(issuesController.delete)
//     .put(issuesController.update);

module.exports = router;
