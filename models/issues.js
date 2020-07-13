module.exports = function (sequelize, DataTypes) {
  const Issues = sequelize.define(
    "Issues",
    {
      content: {
        type: DataTypes.STRING,
      },
      // Display the name of the user
      assignedTo: {
        type: DataTypes.STRING,
      },

      status: {
        type: DataTypes.STRING,
        defaultValue: "open",
      },
    },
    {
      timestamps: false,
    }
  );

  Issues.associate = function (models) {
    models.Issues.belongsTo(models.Projects);
  };

  return Issues;
};
