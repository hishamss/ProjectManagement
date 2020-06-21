module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [6]
        }
      },
      name: {
        type: DataTypes.STRING,
      }
    });
  
    User.associate = function(models){
      models.User.hasMany(models.Projects, {
        onDelete: "cascade"
      })
      models.User.hasMany(models.UserProjects, {
        onDelete: "cascade"
      })
      models.User.hasMany(models.Messages, {
            onDelete: "cascade"
          })
      models.User.hasMany(models.UserMessages, {
            onDelete: "cascade"
          })
    }
    return User;
  }