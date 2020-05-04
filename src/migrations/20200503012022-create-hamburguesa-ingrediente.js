'use strict';
export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('HamburguesaIngredientes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    hamburguesaId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Hamburguesa',
        key: 'id',
        as: 'hamburguesaId'
      }
    },
    ingredienteId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Ingrediente',
        key: 'id',
        as: 'ingredienteId'
      }
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
  return queryInterface.dropTable('HamburguesaIngredientes');
}