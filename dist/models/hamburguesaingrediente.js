'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(sequelize, DataTypes) {
  var HamburguesaIngrediente = sequelize.define('HamburguesaIngrediente', {
    hamburguesaId: DataTypes.INTEGER,
    ingredienteId: DataTypes.INTEGER
  }, {});

  HamburguesaIngrediente.associate = function (models) {// associations can be defined here
  };

  return HamburguesaIngrediente;
};

exports["default"] = _default;