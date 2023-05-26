const axios = require("axios");
const { Sequelize, DataTypes } = require('sequelize');
// Configura los datos de conexión a tu base de datos
const sequelize = new Sequelize('dogs', 'postgres', 'planck', {
  host: 'localhost',
  dialect: 'postgres'
});
// Define el modelo 'Temperamento' si no está definido
const Temperamento = sequelize.define('temperamento', {
  idtemp: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, },
  raza:   { type: DataTypes.STRING, allowNull: true, },
  nombret: { type: DataTypes.STRING, allowNull: true, },
});

const url = 'http://localhost:3001/dogs';

async function getTemperaments() {
try {
  const response = await axios.get(url);
  const dogs = response.data;
      const temperamentsData = dogs.flatMap(dog => {
        const breed = dog.name;
        const temperaments = dog.temperament && dog.temperament !== 'null' ? dog.temperament.split(',').map(t => t.trim()) : [];
        return temperaments.map(temperament => ({
          raza: breed,
          nombret: temperament
        }));
      });
  await Temperamento.bulkCreate(temperamentsData);
  console.log('Registros de temperamentos guardados en la tabla "temperamentos".');
} catch (error) {
  console.error('Error al obtener los temperamentos:', error);
}
}
// Llamada a la función para obtener y guardar los temperamentos
getTemperaments();
