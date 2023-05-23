const URLtodos = 'https://api.thedogapi.com/v1/breeds/';
const api = 'api_key=live_ZfLtEnElDpewJMvadPWb8wUz0ot68ZQdARpOUsPaZPWpdFwtjDc0iemAm3FEExFE';
const {MY_API_KEY} = process.env;
const axios= require("axios");

const getDogsTodos = async (req,resp) => {

    console.log('urlcompleta:',URLtodos)
     try {
       const dogsApin = (await axios.get( URLtodos ))
       return resp.status(200).send(dogsApin.data)
     }
     catch(error){
      //  return resp.status(404).send('No se encuentra ')
      return resp.status(404).send(Error( error  ))
     } 
    }
  module.exports = {
    getDogsTodos
}
