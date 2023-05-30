const { Can } = require('../db');
const postPerro = async (req, resp) => {
const {id,name,bred_for,breed_group,life_span,temperament,origin,reference_image_id,weight,height} = req.body;
 try {
   const newCan = await Can.create({id,name,bred_for,breed_group,life_span,temperament,origin,reference_image_id,weight,height} ); 
   console.log('Se insertó correctamente');
   return resp.status(201).send(newCan);
 } catch (error) {
   console.error('Error al insertar:', error);
   return resp.status(404).send({ error: 'Error en consulta' });
 }
};

module.exports = {  postPerro };

