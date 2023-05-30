
const URLtodos = 'https://api.thedogapi.com/v1/breeds/';
const URLraza  = 'https://api.thedogapi.com/v1/breeds/search?q=';
const URLid    = 'https://api.thedogapi.com/v1/breeds/';
const { conn } = require('../db');
const axios= require("axios");

 const getDogNombreyTodos = async (req, resp) => {
   let aux2 = req.query.nombreraza;
   const URLcompleta = URLraza + req.query.nombreraza;    
   let aux3 = Number.isInteger(parseInt(aux2));
   if (aux3){         /**aqui traigo por numero */
        console.log('aux2:',aux2,' SI es numero');
       let DogsId = aux2;    
       const URLcompleta = URLid + DogsId;  
       try { 
         console.log('URLcompleta:',URLcompleta);
         const dogsApi = (await axios.get( URLcompleta ));
         console.log('el resultrado:', dogsApi.data);
         return resp.status(200).send(dogsApi.data);  
       }
       catch(error){
          return resp.status(404).send('No hay data')
       }  
    }
   else
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
      //console.log('el_idperro:',elidperro,'.');
      //console.log('temperamentos dirty:',listatempsucia,'.');   
      let elarreglolimpio = listatempsucia.split(", ");
      //console.log('limpio: ',elarreglolimpio);
      // let arrayfinal = obtenerIdTempNombres(elidperro, elarreglolimpio);           
      // console.log('el final', arrayfinal);
      console.log(elperro.data[0])
      return resp.status(209).send(elperro.data[0]);
     }
     catch(error) { return resp.status(404).send('No se encuentra ')  } 
   } 
   else {     /**aqui los traigo todos  */
     try {
         const losperros = (await axios.get( URLtodos ))
         return resp.status(200).send(losperros.data)
     }
     catch(error){  return resp.status(404).send('No se encuentra ')  } 
   }    
   }

 const obtenerIdTempNombres = async (idraza, arrayparam) => {
   try {    
      const query = `SELECT idtemp as id FROM temperamentos WHERE nombret IN ('${arrayparam.join("','")}')`;
      const result = await conn.query(query);        
      const algo = insertarCanTemperamento(idraza,result);
      console.log(algo);
      return result[0];
    } 
    catch (error) {
       console.error('Error: ', error);
       return [];
    }
   }

   const insertarCanTemperamento = async (idRaza, arreglobj) => {
    try {
      if (!Array.isArray(arreglobj)) {
       throw new Error('El parámetro arreglobj no es un arreglo válido');
     }
      const queries = arreglobj.map(({id} ) => {
         return `INSERT INTO "CanTemperamento" ("canId", "temperamentoIdtemp","updatedAt") VALUES (${idRaza}, ${id} , now())  `;  
        });      
      await conn.query('BEGIN');  
      for (const query of queries) {   await conn.query(query);    }  
      await conn.query('COMMIT');  
     // conn.release();  
      console.log('Inserción completada exitosamente');
    } catch (error) {
      console.error('Error al insertar en CanTemperamento:', error);  
      conn.query('ROLLBACK', (rollbackError) => {
        if (rollbackError) {
          console.error('Error al hacer rollback:', rollbackError);
        }
      });
    }
  };  /**coded by Felipostre */

 //  insertarCanTemperamento(5, [
 //   { id: 1 },
 //   { id: 2 },
 //   { id: 3 },
 //   { id: 6 },
 //   { id: 7 },
 //   { id: 8 },
 //   { id: 9 },
 //   { id: 12 },
 //   { id: 13 },
 //   { id: 87 }
 // ]);

module.exports = {
  getDogNombreyTodos
}