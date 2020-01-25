'use strict';
var faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let cantidadEquipos = 100;
    let equipos = [];
    for(let i = 0; i<cantidadEquipos; i++){
      equipos.push({
        nombre: faker.name.title(),
        creacion: faker.date.past(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past()
      });
    }
    return queryInterface.bulkInsert('equipo', equipos, {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('equipo', null, {});
  }
};