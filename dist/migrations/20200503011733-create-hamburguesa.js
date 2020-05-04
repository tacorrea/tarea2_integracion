'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = {
  up: function up(queryInterface, Sequelize) {
    var _queryInterface$creat;

    return queryInterface.createTable('Hamburguesas', (_queryInterface$creat = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      }
    }, _defineProperty(_queryInterface$creat, "id", {
      type: Sequelize.INTEGER
    }), _defineProperty(_queryInterface$creat, "nombre", {
      type: Sequelize.STRING
    }), _defineProperty(_queryInterface$creat, "precio", {
      type: Sequelize.INTEGER
    }), _defineProperty(_queryInterface$creat, "descripcion", {
      type: Sequelize.STRING
    }), _defineProperty(_queryInterface$creat, "imagen", {
      type: Sequelize.STRING
    }), _defineProperty(_queryInterface$creat, "createdAt", {
      allowNull: false,
      type: Sequelize.DATE
    }), _defineProperty(_queryInterface$creat, "updatedAt", {
      allowNull: false,
      type: Sequelize.DATE
    }), _queryInterface$creat));
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Hamburguesas');
  }
};