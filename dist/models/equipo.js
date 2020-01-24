'use strict';

module.exports = function (sequelize, DataTypes) {
  var equipo = sequelize.define('equipo', {
    nombre: DataTypes.STRING
  }, {});
  equipo.associate = function (models) {
    // associations can be defined here
  };
  return equipo;
};