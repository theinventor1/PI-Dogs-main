const { Perro } = require('../db');
 const postPerro = async(req,resp) =>  {
 const { idp,imagen,nombre,altura,peso,adevida }  = req.body;
 console.log('aqui es',req.body);
 try{
   const newPerro =  Perro?.create({ idp,imagen,nombre,altura,peso,adevida });
   console.log('debió insertar');
   return resp.status(201).send(newPerro)}
 catch (error) { return resp.status(404).send({ error: 'cagó la consulta' })
 }
}
module.exports ={
 postPerro
} ;