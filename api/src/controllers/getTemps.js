const { conn } = require('../db');

const getTemperamentos = async (req, res) => {
  try {
    const Temperamento = conn.models.Temperamento;
    const temperamentosData = await Temperamento.findAll({
     order:[['nombret', 'asc']]
    });
    const temperamentos = temperamentosData.map(temperamento => ({
     idtemp: temperamento.idtemp,
     nombret: temperamento.nombret
   }));
     res.status(200).send(temperamentos);  
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los temperamentos');
  }
};
module.exports = { getTemperamentos };