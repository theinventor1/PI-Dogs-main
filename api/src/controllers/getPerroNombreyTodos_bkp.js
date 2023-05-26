
const URLtodos = 'https://api.thedogapi.com/v1/breeds/';
const URLraza = 'https://api.thedogapi.com/v1/breeds/search?q=';
const api = 'api_key=live_ZfLtEnElDpewJMvadPWb8wUz0ot68ZQdARpOUsPaZPWpdFwtjDc0iemAm3FEExFE';
//const { Sequelize } = require('sequelize');
const {MY_API_KEY} = process.env;

//const { Sequelize } = require('sequelize');
//const sequelize = new Sequelize('postgres://postgres:planck@localhost:5432/dogs', { logging: false , native: false });
//const { perros } = sequelize.models;

// const { Can, conn } = require('../db');

const axios= require("axios");


 const getDogNombreyTodos = async (req, resp) => {
   const objaux = {}
   const aux2 = req.query.nombreraza;
   const URLcompleta = URLraza + req.query.nombreraza; 
   if( aux2 != undefined ){  /**aqui traigo por nombre */
     try {
      const elperro = ( await axios.get( URLcompleta ));
     // console.log("Objeto:", elperro.data[0] ,'.');
      let objaux = elperro.data[0]; /**aqui filtro para que me de un objeto */
      delete objaux.weight;
      delete objaux.height;
      delete objaux.breed_group;
      let url= 'https://cdn2.thedogapi.com/images/';
      objaux.reference_image_id = url + objaux.reference_image_id + '.jpg';
/**aqui obtengo el id  */
       var elidperro       = objaux.id;
       var listatempsucia  = objaux.temperament;
/**debo sacar las palabras divididas por ,  */
       console.log('el_idperro:',elidperro,'.');
       console.log('temperamentos dirty:',listatempsucia,'.');   
       let elarreglolimpio = listatempsucia.split(", ");
       console.log('limpio: ',elarreglolimpio);
       return resp.status(209).send(elperro.data[0]);
     }
     catch(error){ return resp.status(404).send('No se encuentra ')  } 
   } 
   else {     /**aqui los traigo todos  */
     try {
         const losperros = (await axios.get( URLtodos ))
         return resp.status(200).send(losperros.data)
     }
     catch(error){  return resp.status(404).send('No se encuentra ')  } 
   }    
   }

const obtenerIdTempNombres = async () => {
 const cleandarray = ['Stubborn','Curious','Playful','Adventurous','Active','Fun-loving' ];
   try {    
    // Consultar los registros de temperamentos en base a los valores del arreglo
    const query = `SELECT idtemp, nombret FROM temperamentos WHERE nombret IN ('${cleandarray.join("','")}')`;
    const result = await conn.query(query);        
   // const idTempNombres = result.rows; 
    console.log('result:::', result ,'...');
  //  return idTempNombres;
    } catch (error) {
      console.error('Error: ', error);
    return [];
    }
   }
  //obtenerIdTempNombres();

module.exports = {
  getDogNombreyTodos
}