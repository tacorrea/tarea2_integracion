'use strict';
export default (sequelize, DataTypes) => {
  const HamburguesaIngrediente = sequelize.define('HamburguesaIngrediente', {
    hamburguesaId: DataTypes.INTEGER,
    ingredienteId: DataTypes.INTEGER
  }, {});
  HamburguesaIngrediente.associate = function(models) {
    // associations can be defined here
  };
  return HamburguesaIngrediente;
};