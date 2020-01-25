'use strict';
module.exports = (sequelize, DataTypes) => {
  const equipo = sequelize.define('equipo', {
    nombre: DataTypes.STRING,
    creacion: DataTypes.DATE
  }, {
    tableName: 'equipo'
  });
  equipo.associate = function(models) {
    equipo.hasMany(models.corredor);
    equipo.hasMany(models.carrera);
  };
  return equipo;
};