'use strict';

module.exports = function (sequelize, DataTypes) {
  var carrera = sequelize.define('carrera', {
    nombre: DataTypes.STRING
  }, {});
  carrera.associate = function (models) {
    // associations can be defined here
  };
  return carrera;
};