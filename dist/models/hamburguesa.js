'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(sequelize, DataTypes) {
  var Hamburguesa = sequelize.define('Hamburguesa', {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING
    },
    precio: {
      type: DataTypes.INTEGER
    },
    descripcion: {
      type: DataTypes.STRING
    },
    imagen: {
      type: DataTypes.STRING
    }
  }, {});

  Hamburguesa.associate = function (models) {
    Hamburguesa.belongsToMany(models.Ingrediente, {
      through: models.HamburguesaIngrediente,
      as: 'ingredientes',
      foreignKey: 'hamburguesaId'
    });
  };

  return Hamburguesa;
};

exports["default"] = _default;