const URLid = 'https://api.thedogapi.com/v1/breeds/'
const URLimagen = 'https://cdn2.thedogapi.com/images/';
const axios= require("axios");

    /**Obtiene objeto de perro por Id a la API remota */
const getPerroId = async (req, resp) => {    
    console.log('entra a getPerroId');
    const DogsId = req.params.idRaza;     
    const URLcompleta = URLid + DogsId;  
    try {
      const dogsApi = (await axios.get( URLcompleta ));
      const {reference_image_id} = dogsApi.data;
      let urlimagen = URLimagen +  reference_image_id + '.jpg';
      /**aqui agrego atributo 'urlimagen' al objeto  */
      dogsApi.data.urlimagen = urlimagen; 
      console.log('aqui por ID');
      return resp.status(200).send(dogsApi.data);  
    }
    catch(error){ 
     return resp.status(404).send('No hay data')  
    }  
}
  module.exports = { getPerroId }