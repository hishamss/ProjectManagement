const router = require("express").Router();
const chargeRoute = require("./charge");
const testRoute = require("./test");
const projectsRoute = require("./projects");
const issuesRoute = require("./issues");
const usersRoute = require("./users");

router.use("/charge", chargeRoute);
router.use("/test", testRoute);
router.use("/projects", projectsRoute);
router.use("/issues", issuesRoute);
router.use("/users", usersRoute);
module.exports = router;
