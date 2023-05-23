const { Sequelize } = require('sequelize');

// Configura los datos de conexión a tu base de datos
const sequelize = new Sequelize('dogs', 'postgres', 'planck', {
  host: 'localhost',
  dialect: 'postgres', // Puedes cambiarlo al dialecto correspondiente a tu base de datos
});

module.exports = sequelize;