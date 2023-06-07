const { Can, conn } = require('../db');

const deleteDog = async (inname) => {
 
  if(!id) {
   throw new Error('Perro No existe.');
  } else if (typeof id === 'number'){
    throw new Error('Solo se puede eliminar por nombre raza.');
  } 
  const elperrox = conn.models.Can;
  try{
   const loencuentra = await elperrox.findOne({ where: { name: inname } });
    await loencuentra.destroy('Espike');
    return loencuentra;
  }
  catch (error){
    throw new Error('Error en la Consulta o no se encuentra registro.');
  }
}

// deleteDog('Espike');