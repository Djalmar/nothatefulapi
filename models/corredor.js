'use strict';
module.exports = (sequelize, DataTypes) => {
  const corredor = sequelize.define('corredor', {
    nombre: DataTypes.STRING
  }, {});
  corredor.associate = function(models) {
    // associations can be defined here
  };
  return corredor;
};