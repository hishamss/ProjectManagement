module.exports = function (sequelize, DataTypes) {
    var UserMessages = sequelize.define("UserMessages", {
    });
  
    UserMessages.associate = function(models){
      models.UserMessages.belongsTo(models.User, { onDelete: "cascade" });
      models.UserMessages.belongsTo(models.Messages, { onDelete: "cascade" });
    }
  
    return UserMessages;
  }