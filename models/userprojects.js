module.exports = function (sequelize, DataTypes) {
  var UserProjects = sequelize.define("UserProjects", {});

  UserProjects.associate = function (models) {
    models.UserProjects.belongsTo(models.Users);

    models.UserProjects.belongsTo(models.Projects);
  };

  return UserProjects;
};
