module.exports = function (sequelize, DataTypes) {
  var Projects = sequelize.define("Projects", {
    projectTitle: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    projectLinks: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  //The through is the intermediary table (userprojects)
  Projects.associate = function (models) {
    models.Projects.belongsTo(models.Users, {});
    models.Projects.hasMany(models.Issues, {
      onDelete: "cascade",
    });
    models.Projects.hasMany(models.Messages, {
      onDelete: "cascade",
    });
    models.Projects.hasMany(models.UserProjects, {
      onDelete: "cascade",
    });
  };
  return Projects;
};
