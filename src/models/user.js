'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        firstName: 'Jane',
        lastName: 'Doe',
        createdAt: new Date(),
        updatedAt: new Date(),
        role: 'user',
        password: 'Jane',
        username: '123'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};