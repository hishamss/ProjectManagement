module.exports = function (sequelize, DataTypes) {
  const Users = sequelize.define("Users", {
    firebaseId: {
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    name: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
      defaultValue: "Free",
    },
  });

  //The through is the intermediary table (userprojects)
  Users.associate = function (models) {
    models.Users.hasMany(models.Projects, {});
    models.Users.hasMany(models.Messages, {});
    models.Users.hasMany(models.UserProjects, {
      onDelete: "cascade",
    });
  };
  return Users;
};
