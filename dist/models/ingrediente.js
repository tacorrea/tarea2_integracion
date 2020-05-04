'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(sequelize, DataTypes) {
  var Ingrediente = sequelize.define('Ingrediente', {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING
    },
    descripcion: {
      type: DataTypes.STRING
    }
  }, {});

  Ingrediente.associate = function (models) {
    // associations can be defined here
    Ingrediente.belongsToMany(models.Hamburguesa, {
      through: models.HamburguesaIngrediente,
      as: 'hamburguesas',
      foreignKey: 'ingredienteId'
    });
  };

  return Ingrediente;
}; //id int, nombre string, descripcion string


exports["default"] = _default;