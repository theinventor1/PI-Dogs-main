// Paso 1: Definir la función que realizará la solicitud y devolverá una promesa
function getDogData() {
  return new Promise((resolve, reject) => {
    // Realizar la solicitud a la API
    fetch('https://api.example.com/dogs')
      .then(response => {
        // Verificar si la respuesta es exitosa (código de estado 200)
        if (response.status === 200) {
          // Si es exitosa, convertir los datos a formato JSON y resolver la promesa
          resolve(response.json());
        } else {
          // Si la respuesta no es exitosa, rechazar la promesa con un mensaje de error
          reject('No se pudo obtener los datos de los perros');
        }
      })
      .catch(error => {
        // Si ocurre algún error durante la solicitud, rechazar la promesa con el error
        reject(error);
      });
  });
}

// Paso 2: Llamar a la función y usar los datos en la ruta 'localhost/dogs/'
getDogData()
  .then(data => {
    // Aquí puedes manipular los datos obtenidos de la API
    // En este ejemplo, simplemente los mostraremos en la consola
    console.log(data);
  })
  .catch(error => {
    // En caso de error, manejarlo adecuadamente
    console.error(error);
  });
