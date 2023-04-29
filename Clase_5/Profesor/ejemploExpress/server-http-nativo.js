import http from 'http'
import fs from 'fs'

const server = http.createServer( async (req,res) => {
    const { url, method } = req
    console.log(url,method)

    // parseador de métodos
    if(method == 'GET') {

        // parseador de rutas
        if(url == '/') {
            const page = await fs.promises.readFile('public/index.html')
            res.writeHead(200, { 'content-type' : 'text/html' })
            res.end(page)
        }
        else if(url == '/clientes') {
            res.writeHead(200, { 'content-type' : 'text/html;charset=utf-8' })
            res.end('Obteniendo información de clientes')
        }
        else if(url == '/usuarios') {
            res.writeHead(200, { 'content-type' : 'text/html;charset=utf-8' })
            res.end('Obteniendo información de usuarios')
           
        }
        else if(url == '/productos') {
            res.writeHead(200, { 'content-type' : 'text/html;charset=utf-8' })
            res.end('Obteniendo información de productos')
        }
        // rutas no atendidas (no declaradas arriba)
        else {
            res.writeHead(404, { 'content-type' : 'text/html;charset=utf-8' })
            res.end('Ruta no encontrada')
        }
    }
    // resto de los métodos (no implementados arriba)
    else {
        res.writeHead(500, { 'content-type' : 'text/html;charset=utf-8' })
        res.end('Método no implementado')
    }
})

const PORT = 8080
server.listen(PORT, 
    () => console.log(`Servidor http nativo escuchando en http://localhost:${PORT}`)
)
server.on('error', error => console.log(`Error en servidor: ${error.message}`))