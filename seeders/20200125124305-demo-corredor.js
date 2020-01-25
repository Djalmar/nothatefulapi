'use strict';
var faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let cantidadCorredores = 1000;
    let corredores = [];
    for (let i = 0; i < cantidadCorredores; i++) {
      corredores.push({
        nombre: faker.name.findName(),
        correo: faker.internet.email(),
        placa: faker.random.number(),
        telefono: faker.phone.phoneNumber(),
        categoria: faker.random.arrayElement(['HARDTAIL', 'ELITE', 'MASTER']),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past()
      })
    }
    return queryInterface.bulkInsert('corredor', corredores, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('corredor', null, {});
  }
};