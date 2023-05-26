const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
sequelize.define('temperament', {
    idtemp: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    idt: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nombret: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
}