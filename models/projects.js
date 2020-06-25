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
    },
    /*userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }*/
  });

  //The through is the intermediary table (userprojects)
  Projects.associate = function (models) {
    models.Projects.belongsToMany(models.User, {
      through: 'userprojects',
      as: 'users',
      foreignKey: 'projectId',
      onDelete: "cascade"
    })
    models.Projects.hasMany(models.Issues, {
      onDelete: "cascade"
    })
  }
  return Projects;
}
