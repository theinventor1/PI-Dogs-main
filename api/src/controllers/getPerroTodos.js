const URLtodos = 'https://api.thedogapi.com/v1/breeds/';
const axios= require("axios");

const getdogsall = async (req,resp) => {
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
 module.exports = { getdogsall }
