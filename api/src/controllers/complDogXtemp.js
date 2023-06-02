const URLtodos = 'https://api.thedogapi.com/v1/breeds/';
const axios = require("axios");
const compdogxtemp = async (req, resp) => {
  const temperamento = req.params.eltemp;
  console.log('urlcompleta:', URLtodos);
  try {
    const response = await axios.get(URLtodos);
    const dogsApin = response.data;
    // Filtrar los perros por temperamento
    const perrosFiltrados = dogsApin.filter(perro => {
      if (perro.temperament && perro.temperament.includes(temperamento)) {
        return true;
      }
      return false;
    });
    // Obtener solo los atributos 'id' y 'name' de los perros filtrados
    const perrosSeleccionados = perrosFiltrados.map(perro => 
     {
       return { 
        id: perro.id, 
        name: perro.name,
        bred_for: perro.bred_for, 
        breed_group: perro.bred_for , 
        life_span: perro.life_span, 
        temperament: perro.temperament,
        origin: perro.origin,
        reference_image_id: perro.reference_image_id, 
        weight: perro.weight,
        height:perro.height,
        urlimagen:'https://cdn2.thedogapi.com/images/'+ perro.reference_image_id+'.jpg' };       
       });

      return resp.status(200).send(perrosSeleccionados);
  } catch (error) {
    return resp.status(404).send(Error(error));
  }
};

module.exports = {
 compdogxtemp
};
