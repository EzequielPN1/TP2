const http = require('http')

const server = http.createServer((req,res) => {
 res.writeHead(200,{'content-type':'text/html'})
 res.write('<h1 style="color:purple">Hola soy el servidor http</h1>')   
 res.end('<h2 style="color:green">La fecha y hora actual es ' + new Date().toLocaleString())
 
}) 

const PORT = 8080
server.listen(PORT, () => console.log('Servidor http escuchando en http://localhost:'+PORT))
server.on('error',error => console.log('Error en el servidor: ' + error.message))