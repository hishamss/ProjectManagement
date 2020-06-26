module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    firebaseId: {
      type: DataTypes.STRING,
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

  //The through is the intermediary table (userprojects)
  User.associate = function (models) {
    models.User.belongsToMany(models.Projects, {
      through: 'userprojects',
      as: 'projects',
      foreignKey: 'userId',
      onDelete: "cascade"
    })
 
  }
  return User;
}