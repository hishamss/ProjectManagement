module.exports = function (sequelize, DataTypes) {
  const Issues = sequelize.define("Issues", {
    task: {
      type: DataTypes.STRING,
    },
    // Display the name of the user
    assignedTo: {
      type: DataTypes.STRING,
    },
  });

  Issues.associate = function (models) {
    models.Issues.belongsTo(models.Projects);
  };

  return Issues;
};
