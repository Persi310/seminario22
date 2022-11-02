const http = require('http');
const webPort = 8080

http.createServer((req,res)) => {
  res.write('hola amigos de seminario 2022');
  res.end();
})
.listen( webPort )

console.log('Escuchando el puerto 2, ${webPort}')
