const { Can, conn } = require('../db');
const select4Perros = async (req,resp) =>{
try {
 const query = `SELECT id,name,temperament FROM cans ORDER BY id desc LIMIT 4`;
 const result = await conn.query(query);     
 console.log('resu:', result[0]);
 return resp.status(200).send(result[0]);

}
catch(error)
{
 return resp.status(404).send(Error(error));
}
}

module.exports = {select4Perros};