module.exports = function (sequelize, DataTypes) {
  var UserProjects = sequelize.define("UserProjects", {
    status: {
      type: DataTypes.STRING,
      defaultValue: "Pending",
    },
  });

  UserProjects.associate = function (models) {
    models.UserProjects.belongsTo(models.Users);

    models.UserProjects.belongsTo(models.Projects);
  };

  return UserProjects;
};
