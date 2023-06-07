const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
sequelize.define('temperamento', {
  idtemp: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, },
  nombret:{ type: DataTypes.STRING, allowNull: true, },
  });
}