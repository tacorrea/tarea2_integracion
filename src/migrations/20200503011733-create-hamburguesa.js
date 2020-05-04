'use strict';
export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('Hamburguesas', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    id: {
      type: Sequelize.INTEGER
    },
    nombre: {
      type: Sequelize.STRING
    },
    precio: {
      type: Sequelize.INTEGER
    },
    descripcion: {
      type: Sequelize.STRING
    },
    imagen: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
}
export function down(queryInterface, Sequelize) {
  return queryInterface.dropTable('Hamburguesas');
}