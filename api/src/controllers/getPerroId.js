const URLid = 'https://api.thedogapi.com/v1/breeds/'
const URLimagen = 'https://cdn2.thedogapi.com/images/';
const api = 'api_key=live_ZfLtEnElDpewJMvadPWb8wUz0ot68ZQdARpOUsPaZPWpdFwtjDc0iemAm3FEExFE';
const {MY_API_KEY} = process.env;
const axios= require("axios");

const getDogsId = async (req, resp) => {    
    const DogsId = req.params.idRaza;     
    const URLcompleta = URLid + DogsId;  
    try {
      const dogsApi = (await axios.get( URLcompleta ));
      const {reference_image_id} = dogsApi.data;
      let urlimagen = URLimagen +  reference_image_id + '.jpg';

      dogsApi.data.urlimagen = urlimagen; /**aqui agrego atributo 'urlimagen' al objeto  */
      return resp.status(200).send(dogsApi.data);  
    }
    catch(error){
       return resp.status(404).send('No hay data')
    }  
}
  module.exports = {
    getDogsId
}