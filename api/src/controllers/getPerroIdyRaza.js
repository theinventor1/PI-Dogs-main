const { conn } = require('../db');
const URLid = 'https://api.thedogapi.com/v1/breeds/'
const URLimagen = 'https://cdn2.thedogapi.com/images/';
const URLraza  = 'https://api.thedogapi.com/v1/breeds/search?q=';
const axios= require("axios");

const getPerroIdyRaza = async (req, resp) => {     
    console.log('entra a getPerroIdyRaza');    
    const DogsId = req.params.idRaza; 
    let aux2 = DogsId;
    let aux3 = Number.isInteger(parseInt(aux2));
    if (aux3){       /** si aux2 es un numero , entonces aqui traigo por numero  */
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
       catch(error){ return resp.status(404).send('No hay data')  }  
   }else 
   {
    if ( aux2 != undefined ) {  /**  aqui traigo por nombre   */
    try {
    console.log('getPerroIdyRaza 1er else:', aux2,'.');
    const URLcompleta = URLraza + DogsId;  
    //console.log('URLcompleta:',URLcompleta);

    const elperro = ( await axios.get( URLcompleta ));
    let objaux = elperro.data[0]; /**aqui filtro para que me de un objeto */
    // delete objaux.weight;
    // delete objaux.height;
    delete objaux.breed_group;
    delete objaux.bred_for;
    let url= 'https://cdn2.thedogapi.com/images/';
    objaux.urlimagen = url + objaux.reference_image_id + '.jpg';
    /**aqui obtengo el id  */
    var elidperro       = objaux.id;
    var listatempsucia  = objaux.temperament;
    /**debo sacar las palabras divididas por ,  */
    //console.log('el_idperro:',elidperro,'.');
    //console.log('temperamentos dirty:',listatempsucia,'.');   
    let elarreglolimpio = listatempsucia.split(", ");
    return resp.status(200).send(elperro.data[0]);
   }
   catch(error) { 
     /** aqui busco a la BD*/
     const query = `SELECT * FROM cans WHERE name LIKE '%' || '${req.params.idRaza}' || '%'`;     
     try { 
      const resulta = await conn.query(query); 
     let url= 'https://cdn2.thedogapi.com/images/';
     resulta[0][0].urlimagen = 'http://localhost:3001/imagenperro/generic.jpg';
     console.log('select:', resulta[0][0],'.');
     return resp.status(200).send(resulta[0][0]);
     }
     catch(error){
      return resp.status(400).send('No se encuentra ')  }
     }     
   }
   } 

}
  module.exports = { getPerroIdyRaza }