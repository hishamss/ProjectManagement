module.exports = function (sequelize, DataTypes) {
    var Projects = sequelize.define("Projects", {
      projectTitle: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      projectDescription: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
  
    Projects.associate = function(models){
      models.Projects.belongsTo(models.User)
      models.Projects.hasMany(models.UserProjects, {
        onDelete: "cascade"
      })
      models.Projects.hasMany(models.Issues, {
        onDelete: "cascade"
      })
    }
    return Projects;
  }
