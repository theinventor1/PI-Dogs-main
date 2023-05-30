const axios = require("axios");
const { Sequelize, DataTypes } = require('sequelize'); // Conexión a tu base de datos
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
/**temp: temperamento ; temps: temperamentos */
async function pueblaTempers() {
  try {
    const response = await axios.get(url);
    const dogs = response.data;    
    const tempsSet = new Set(); // Utilizamos un Set para almacenar los temperamentos sin repetir    
    dogs.forEach(dog => {
      const temps = dog.temperament && dog.temperament !== 'null' ? dog.temperament.split(',').map(t => t.trim()) : [];
      temps.forEach(temperament => {
       tempsSet.add(temperament); // Agregamos cada temperamento al Set
      });
    });    
    const tempsData = Array.from(tempsSet).map(temperament => ({ nombret: temperament }));
    
    await Temperamento.bulkCreate(tempsData);
    console.log('Temperamentos guardados en la tabla "temperamentos".');
  } catch (error) {
    console.error('Error al obtener los temperamentos:', error);
  }
}
// Llamada a la función para obtener y guardar los temperamentos
pueblaTempers();