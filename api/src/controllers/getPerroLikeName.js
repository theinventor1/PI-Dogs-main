const axios = require('axios');
const URLtodos = 'https://api.thedogapi.com/v1/breeds/';
/** ejemplo: http://localhost:3000/dogname/Max   , busca semajansas de Max */
const getperrolikename = async (req, res) => {
  try {
    const elnombre = req.params.elnombre;

    const response = await axios.get(URLtodos);
    const dogsData = response.data;
    /** aqui ahora hago la busqueda real en el array */
    const filteredDogs = dogsData.filter((dog) => {
    const conditionRegex = new RegExp(`^${elnombre}`, 'i');
    return conditionRegex.test(dog.name);
    });
    return res.status(200).send(filteredDogs);
  } catch (error) {
    console.error(error);
    return res.status(404).send('No se encontró la información');
  }
};

module.exports = {
 getperrolikename,
};
