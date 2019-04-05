/* Se denomina con old a todos los archivos que no se utilizan en la aplicación
Que son una forma antigua de hacer lo mismo que realizamos con express o hbs*/
const http = require('http');
// crear servidor
http.createServer((req, res)=>{
  // res.write('Hola Mundo');
  res.writeHead(200, {'Content-Type':'application/json'});
  let salida = {
    nombre: 'fernando',
    edad: 32,
    url: req.url
  }
  res.write(JSON.stringify(salida));
  res.end();
})
.listen(8080);
console.log("Escuchando en el puerto 8080");