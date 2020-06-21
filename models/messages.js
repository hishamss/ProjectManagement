
module.exports = function (sequelize, DataTypes) {
    var Messages= sequelize.define("Messages", {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        message: {
            type: DataTypes.STRING
        },
        userId: {
            type: DataTypes.INTEGER
        }
    });

    Messages.associate = function(models){
        models.Messages.belongsTo(models.User, { as: "host" })
        models.Messages.hasMany(models.UserMessages, {
          onDelete: "cascade"
        })
      }

    return Messages;
}