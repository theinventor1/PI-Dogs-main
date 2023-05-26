const { DataTypes } = require('sequelize');

module.exports = (sequelize) => { // defino el modelo
 sequelize.define('dog', {
   iddog: { type: DataTypes.INTEGER,  autoIncrement: true, primaryKey: true, },
   idp:   { type: DataTypes.STRING,  allowNull: true, },
   imagen: { type: DataTypes.STRING,  allowNull: true, },
   nombre: { type: DataTypes.STRING,  allowNull: true, },
   altura: { type: DataTypes.STRING,  allowNull: true, },
   peso:   { type: DataTypes.STRING,  allowNull: true, },
   adevida: { type: DataTypes.STRING,  allowNull: true, },
 });
};