'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('equipo', [{
      nombe: 'John Doe'
    }], {});
  },

  down: function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('equipo', null, {});
  }
};