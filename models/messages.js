module.exports = function (sequelize, DataTypes) {
  var Messages = sequelize.define("Messages", {
    message: {
      type: DataTypes.STRING,
    },
  });

  Messages.associate = function (models) {
    models.Messages.belongsTo(models.Projects);
    models.Messages.belongsTo(models.Users);
  };

  return Messages;
};
