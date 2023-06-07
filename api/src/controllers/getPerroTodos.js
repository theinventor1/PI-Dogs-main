const URLtodos = 'https://api.thedogapi.com/v1/breeds/';
const axios= require("axios");

const getperrotodos = async (req,resp) => {
  console.log('urlcompleta:',URLtodos)
   try {
     const dogstodos = (await axios.get( URLtodos ));

     return resp.status(200).send(dogstodos.data);
   }
   catch(error){
    //  return resp.status(404).send('No se encuentra ')
    return resp.status(404).send(Error( error  ))
   } 
  }
 module.exports = { getperrotodos }
