const { Can, conn } = require('../db');
const postPerro = async (req, resp) => {
const {id,name,bred_for,breed_group,life_span,temperament,origin,reference_image_id,weight,height} = req.body;
let flagOk = 0;
 try {
   const newCan = await Can.create({id,name,bred_for,breed_group,life_span,temperament,origin,reference_image_id,weight,height} ); 
   console.log('Se insertó correctamente');
   flagOk = 1;
   /** */
   console.log('postCan -> newCan: ', newCan);
   console.log('postCan -> newCan.dataValues: ', newCan.dataValues )

   // obtenerIdTempNombres(id, )
    
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


module.exports = {  postPerro };

