'use strict';
var faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let cantidadCarreras = 12;
    let carreras = [];
    for (let i = 0; i < cantidadCarreras; i++) {
      carreras.push({
        nombre: faker.name.findName(),
        fecha: faker.date.future(),
        costo: faker.random.number(50),
        enlace: faker.internet.url(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past()
      })
    }
    return queryInterface.bulkInsert('carrera', carreras, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('carrera', null, {});
  }
};