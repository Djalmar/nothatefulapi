'use strict';
module.exports = (sequelize, DataTypes) => {
  const carrera = sequelize.define('carrera', {
    nombre: DataTypes.STRING(100),
    fecha: DataTypes.DATE,
    costo: DataTypes.INTEGER,
    enlace: DataTypes.STRING
  }, {
    tableName: 'carrera'
  });
  carrera.associate = function(models) {
    carrera.belongsToMany(models.corredor,{
      through: 'carreras_corredores',
      as: 'corredores'
    });
    carrera.belongsTo(models.equipo);
  };
  return carrera;
};