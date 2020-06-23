const router = require("express").Router();
const chargeRoute = require("./charge");
const testRoute = require("./test");
const projectsRoute = require("./projects");

router.use("/charge", chargeRoute);
router.use("/test", testRoute);
router.use("/projects", projectsRoute);
module.exports = router;
