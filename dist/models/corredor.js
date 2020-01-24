'use strict';

module.exports = function (sequelize, DataTypes) {
  var corredor = sequelize.define('corredor', {
    nombre: DataTypes.STRING
  }, {});
  corredor.associate = function (models) {
    // associations can be defined here
  };
  return corredor;
};