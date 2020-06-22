module.exports = function (sequelize, DataTypes) {
  var Projects = sequelize.define("Projects", {
    ProjectName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ProjectDescription: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 50000],
      },
    },
  });

  return Projects;
};
