const axios = require("axios");
const { Sequelize, DataTypes } = require('sequelize');
// Conexión a tu base de datos
const sequelize = new Sequelize('dogs', 'postgres', 'planck', {
  host: 'localhost',
  dialect: 'postgres'
});
// Define el modelo 'Temperamento' si no está definido
const Temperamento = sequelize.define('temperamento', {
 idtemp: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, },
 nombret:{ type: DataTypes.STRING,  allowNull: true, },
});

const url = 'http://localhost:3001/dogs';

async function pueblaTempers() {
  try {
    const response = await axios.get(url);
    const dogs = response.data;    
    const temperamentsSet = new Set(); // Utilizamos un Set para almacenar los temperamentos sin repetir    
    dogs.forEach(dog => {
      const temperaments = dog.temperament && dog.temperament !== 'null' ? dog.temperament.split(',').map(t => t.trim()) : [];
      temperaments.forEach(temperament => {
        temperamentsSet.add(temperament); // Agregamos cada temperamento al Set
      });
    });    
    const temperamentsData = Array.from(temperamentsSet).map(temperament => ({ nombret: temperament }));
    
    await Temperamento.bulkCreate(temperamentsData);
    console.log('Registros de temperamentos guardados en la tabla "temperamentos".');
  } catch (error) {
    console.error('Error al obtener los temperamentos:', error);
  }
}
// Llamada a la función para obtener y guardar los temperamentos
pueblaTempers();