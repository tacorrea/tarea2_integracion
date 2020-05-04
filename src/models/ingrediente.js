'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingrediente = sequelize.define('Ingrediente', {
    id: {
      allowNull:false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre:{
      type: DataTypes.STRING
    }, 
    descripcion:{
      type: DataTypes.STRING
    }
  }, {});
  Ingrediente.associate = function(models) {
    // associations can be defined here
    Ingrediente.belongsToMany(models.Hamburguesa, {
      through: models.HamburguesaIngrediente,
      as:'hamburguesas',
      foreignKey: 'ingredienteId'
    });
  };
  return Ingrediente;
};

//id int, nombre string, descripcion string