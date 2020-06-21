
module.exports = function (sequelize, DataTypes) {
    var Notes = sequelize.define("Notes", {

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

    Notes.associate = function(models) {
        models.Notes.belongsTo(models.Projects);
    }

    return Notes;
}