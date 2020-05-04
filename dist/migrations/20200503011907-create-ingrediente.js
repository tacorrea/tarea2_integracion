'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.up = up;
exports.down = down;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function up(queryInterface, Sequelize) {
  var _queryInterface$creat;

  return queryInterface.createTable('Ingredientes', (_queryInterface$creat = {
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
  }), _defineProperty(_queryInterface$creat, "descripcion", {
    type: Sequelize.STRING
  }), _defineProperty(_queryInterface$creat, "createdAt", {
    allowNull: false,
    type: Sequelize.DATE
  }), _defineProperty(_queryInterface$creat, "updatedAt", {
    allowNull: false,
    type: Sequelize.DATE
  }), _queryInterface$creat));
}

function down(queryInterface, Sequelize) {
  return queryInterface.dropTable('Ingredientes');
}