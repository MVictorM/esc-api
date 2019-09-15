'use strict';
module.exports = (sequelize, DataTypes) => {
    let Perfil = sequelize.define('Perfil', {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        nome: DataTypes.STRING,
    }, {tableName: 'perfis', timestamps: false});

    Perfil.associate = function(models) {
        Perfil.hasMany(models.User, {
            foreignKey: 'perfil_id',
            constraints: false
        });
    };

    return Perfil;
};