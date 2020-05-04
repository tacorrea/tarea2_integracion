'use strict';

module.exports = function (sequelize, DataTypes) {
  var HamburguesaIngrediente = sequelize.define('HamburguesaIngrediente', {
    hamburguesaId: DataTypes.INTEGER,
    ingredienteId: DataTypes.INTEGER
  }, {});

  HamburguesaIngrediente.associate = function (models) {// associations can be defined here
  };

  return HamburguesaIngrediente;
};