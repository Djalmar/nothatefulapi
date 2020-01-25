'use strict';
module.exports = (sequelize, DataTypes) => {
  const corredor = sequelize.define('corredor', {
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    placa: DataTypes.INTEGER,
    telefono: DataTypes.STRING,
    categoria: DataTypes.ENUM('HARDTAIL', 'ELITE', 'MASTER')
  }, {
    tableName: 'corredor'
  });
  corredor.associate = function(models) {
    corredor.belongsToMany(models.carrera,{
      through: 'carreras_corredores',
      as: 'carreras'
    });
    corredor.belongsTo(models.equipo);
  };
  return corredor;
};