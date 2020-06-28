const router = require("express").Router();

router.route("/:email").get((req, res) => {
  console.log(req.params.email);
  const output = `
  <h1>You have been added to project {Project Title} on Email:${req.params.email}</h1>
  <p>Click on the link below to login/sign up to be able to access the project</p>
  `;
});

module.exports = router;
