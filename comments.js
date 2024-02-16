const http = require('http');

// Define el puerto en el cual el servidor escuchará las peticiones
const port = 3000;

// Crea el servidor HTTP
const server = http.createServer((req, res) => {
  // Configura el código de estado HTTP y los encabezados de la respuesta
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  // Envía el cuerpo de la respuesta
  res.end('<h1>Hola Mundo</h1>');
});

// El servidor comienza a escuchar las peticiones en el puerto especificado
server.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}/`);
});
