const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 sequelize.define('temperamento', {
  idtemp: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, },
  idt:   { type: DataTypes.STRING, allowNull: true, },
  raza:   { type: DataTypes.STRING, allowNull: true, },
  nombret:{ type: DataTypes.STRING, allowNull: true, },
  });
}