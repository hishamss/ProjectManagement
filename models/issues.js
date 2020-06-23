
module.exports = function (sequelize, DataTypes) {
    var Issues = sequelize.define("Issues", {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        task: {
            type: DataTypes.STRING
        },
        userId: {
            type: DataTypes.INTEGER
        }
    });

    Issues.associate = function(models) {
        models.Issues.belongsTo(models.Projects);
    }

    return Issues;
}