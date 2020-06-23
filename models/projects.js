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
      models.Projects.belongsTo(models.User, { as: "host" })
      models.Event.hasMany(models.UserProjects, {
        onDelete: "cascade"
      })
    }
    return Projects;
  }
