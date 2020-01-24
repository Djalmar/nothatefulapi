'use strict';
module.exports = (sequelize, DataTypes) => {
  const equipo = sequelize.define('equipo', {
    nombre: DataTypes.STRING
  }, {});
  equipo.associate = function(models) {
    // associations can be defined here
  };
  return equipo;
};