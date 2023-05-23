const axios= require("axios");
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dogs', 'postgres', 'planck', {
  host: 'localhost',
  dialect: 'postgres'
});


const Temperamento = require('../models/Temperamento')(sequelize);
const url ='http://localhost:3001/dogs'; 

async function getTemperaments() {
  try {
    const response = await axios.get('http://localhost:3001/dogs');
    const dogs = response.data;

    const temperamentsByBreed = dogs.map(dog => ({
      breed: dog.name,
      temperaments: dog.temperament && dog.temperament !== 'null' ? dog.temperament.split(',').map(t => t.trim()) : []
    }));

    const temperamentsData = temperamentsByBreed.flatMap(item => item.temperaments.map(temperament => ({
      nombret: temperament
    })));

    await Temperamento.bulkCreate(temperamentsData);

    console.log('Registros de temperamentos guardados en la tabla "temperamentos".');
  } catch (error) {
    console.error('Error al obtener los temperamentos:', error);
  }
}
 // Llamada a la función para obtener y guardar los temperamentos
 getTemperaments();
  

//  const hola = getTemperaments()
//   .then(data => {
//     // Aquí puedes utilizar los datos obtenidos
//     data.forEach(item => {
//       console.log('Raza:', item.breed);
//       console.log('Temperamentos:', item.temperaments);
//       console.log('-----------------------');
//     });
//   })

let temps = []

module.exports = {
  getTemperaments
}

