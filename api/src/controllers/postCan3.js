const { Can } = require('../db');

const postPerro = async (req, resp) => {
  // const { id, name, bred_for, breed_group, life_span, temperament, origin, reference_image_id, weight, height } = req.body[0];
  // const weightImperial = weight.imperial;
  // const weightMetric = weight.metric;
  // const heightImperial = height.imperial;
  // const heightMetric = height.metric;
const {} = req.body;
  try {
    const newCan = await Can.create(req.body);
    console.log('Se insertó correctamente');
    return resp.status(201).send(newCan);
  } catch (error) {
    console.error('Error al insertar:', error);
    return resp.status(404).send({ error: 'Error en la consulta' });
  }
};
module.exports = { postPerro };
/** pruebas
 * {
  "id": 5,
  "name": "Airedale Terrier",
  "bred_for": "Badger, otter hunting",
  "breed_group": "Terrier",
  "life_span": "10 - 13 years",
  "temperament": "Outgoing, Friendly, Alert, Confident, Intelligent, Courageous",
  "origin": "United Kingdom, England",
  "reference_image_id": "1-7cgoZSh",
  "updatedAt": "2023-05-25T06:17:12.375Z",
  "createdAt": "2023-05-25T06:17:12.375Z",
  "weight": {"imperial":"40 - 65","metric":"18 - 29"},
  "height": {"imperial":"21 - 23","metric":"53 - 58"}
}
 * 
 */
