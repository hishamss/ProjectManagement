const router = require("express").Router();

// router : api/test
router.get("/", (req, res) => {
  res.send("hi");
});

module.exports = router;
