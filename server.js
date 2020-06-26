const express = require("express");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
var db = require("./models");
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use apiRoutes
app.use(routes);

// Connect to the Sequelize
db.sequelize.sync({ /*force: true*/ }).then(() => {
  app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server is listening on: http://localhost:" + PORT);
  });
});
