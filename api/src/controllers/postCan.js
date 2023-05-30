const { Can, conn } = require('../db');
let aux4 = [];
const postPerro = async (req, resp) => {
const {id,name,bred_for,breed_group,life_span,temperament,origin,reference_image_id,weight,height} = req.body;
let flagOk = 0;
 try {
   const newCan = await Can.create({id,name,bred_for,breed_group,life_span,temperament,origin,reference_image_id,weight,height} ); 
   console.log('Se insertó correctamente');
   flagOk = 1;
   /** */
   console.log('postCan -> newCan: ', newCan);
   console.log('postCan -> newCan.dataValues: ', newCan.dataValues );
   aux4 = newCan.dataValues;
   console.log('aux4:',aux4);
   var elidperro = aux4.id;
   console.log('el idperro:',elidperro);
   var listatempsucia  = aux4.temperament;
   console.log('listatempsucia:',listatempsucia);
   let elarreglolimpio = listatempsucia.split(", ");
   console.log('arrayLimpio: ',elarreglolimpio);
   let arrayfinal = obtenerIdTempNombres(aux4.id, elarreglolimpio); 
   console.log('el ARRAY final', arrayfinal);
    
   return resp.status(201).send(newCan);  

 } catch (error) {
   flagOk = 0;
   console.error('Error al insertar:', error);
   return resp.status(404).send({ error: 'Error en consulta' });
 }
};

const obtenerIdTempNombres = async (idraza, arrayparam) => {
 try {    
    const query = `SELECT idtemp as id FROM temperamentos WHERE nombret IN ('${arrayparam.join("','")}')`;
    const result = await conn.query(query);     
    console.log('idraza:',idraza,'.');
    console.log('resultado obtener idNombre:',result[0],'__>');

    const algo = insertarCanTemperamento(idraza, result[0]);
    
    //return result[0];
  } 
  catch (error) {
     console.error('Error: ', error);
     return [];
  }
 }

const insertarCanTemperamento = async (idRaza, arreglobj) => {
 try {
   console.log('este es el array objeto:',arreglobj);
   if (!Array.isArray(arreglobj)) {
    throw new Error('El parámetro arreglobj no es un arreglo válido');
  }
const queries = arreglobj.map(({id} ) => {
 return `INSERT INTO "CanTemperamento" ("canId", "temperamentoIdtemp","createdAt","updatedAt") VALUES (${idRaza}, ${id} ,now(), now()) `;  
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


module.exports = {  postPerro };

