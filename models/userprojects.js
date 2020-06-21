
module.exports = function (sequelize, DataTypes) {
    var UserProjects = sequelize.define("UserProjects", {
    });
    UserProjects.associate = function(models){
      models.UserProjects.belongsTo(models.User, { onDelete: "cascade" });
      models.UserProjects.belongsTo(models.Projects, { onDelete: "cascade" });
    }
  
    return UserProjects;
  }