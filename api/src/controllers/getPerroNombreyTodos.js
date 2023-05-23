const URLtodos = 'https://api.thedogapi.com/v1/breeds/';
const URLraza = 'https://api.thedogapi.com/v1/breeds/search?q=';
const api = 'api_key=live_ZfLtEnElDpewJMvadPWb8wUz0ot68ZQdARpOUsPaZPWpdFwtjDc0iemAm3FEExFE';
const {MY_API_KEY} = process.env;
const axios= require("axios");
const getDogsNombreyTodos = async (req, resp) => {
    const aux2 = req.query.nombreraza;
    const URLcompleta = URLraza + req.query.nombreraza; 
    if( aux2 != undefined ){  /**aqui traigo por nombre */
      try {
          const elperro = (await axios.get( URLcompleta ))
          return resp.status(200).send(elperro.data);  
     }
      catch(error){
          return resp.status(404).send('No se encuentra ')
     } 
    } 
    else {     /**aqui los traigo todos  */
      try {
          const losperros = (await axios.get( URLtodos ))
          return resp.status(200).send(losperros.data)
      }
      catch(error){      
          return resp.status(404).send('No se encuentra ')
      } 
    }    
    }




module.exports = {
  getDogsNombreyTodos
}