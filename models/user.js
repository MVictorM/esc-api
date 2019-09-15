'use strict';
module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define('User', {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        username: DataTypes.STRING,
        nome: DataTypes.STRING,
        perfil_id: DataTypes.INTEGER,
    }, {tableName: 'users', timestamps: false});

    User.associate = function(models) {
        User.belongsTo(models.Perfil, {
            foreignKey: 'perfil_id',
            constraints: false,
        });
    };

    return User;
};