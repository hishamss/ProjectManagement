module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {

    firebaseId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    name: {
      type: DataTypes.STRING,
    }
  });

  User.associate = function (models) {
    models.User.hasMany(models.Projects, {
      onDelete: "cascade"
    })
    models.User.hasMany(models.UserProjects, {
      onDelete: "cascade"
    })


  }
  return User;
}