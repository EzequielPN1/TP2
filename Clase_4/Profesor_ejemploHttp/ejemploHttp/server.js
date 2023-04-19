//const http = require('http')    // type: "commonjs" importación nativa de Node.JS
//const fs = require('fs')        // type: "commonjs" importación nativa de Node.JS

import http from 'http'    // type: "module" importación especificación ECMAScript ES Module
import fs from 'fs'        // type: "module" importación especificación ECMAScript ES Module

let contadorVisitas = 0

const server = http.createServer(async (req,res) => {
    //console.log(req)

    //const url = req.url
    //const method = req.method
    //const { url, method } = req     // destructuring object
    //const { url:url, method:method } = req     // destructuring object
    const { url:ruta, method:metodo } = req     // destructuring object (con alias)

    console.log(metodo, ruta)

    if(metodo == 'GET') {
        if(ruta == '/') {
            // fs con promise (async/await)
            try {
                const page = await fs.promises.readFile('./public/index.html')
                contadorVisitas++
                res.writeHead(200, { 'content-type' : 'text/html' })
                res.end(page)
            }
            catch(error) {
                res.writeHead(404, { 'content-type' : 'text/html' })
                res.end(`<h4 style="color:red;">ERROR 404: ${error.message}</h4>`)
            }

            // fs con callbacks
            /* fs.readFile('./public/index.html', (error, page) => {
                if(!error) {
                    contadorVisitas++
                    res.writeHead(200, { 'content-type' : 'text/html' })
                    res.end(page)
                }
                else {
                    res.writeHead(404, { 'content-type' : 'text/html' })
                    res.end(`<h4 style="color:red;">ERROR 404: ${error.message}</h4>`)
                }
            }) */
        }
        else if(ruta == '/info') {
            res.writeHead(200, { 'content-type' : 'text/html' })
            res.write('<h1 style="color:purple;">Hola soy el servidor http</h1>')
            res.write(`<h2 style="color:green;">La fecha y hora actual es ${ new Date().toLocaleString() }</h2>`)
            res.end(`<h3 style="color:orange;">Random ${ Math.random() }</h3>`)
        }
        else if(ruta == '/visitas') {
            res.writeHead(200, { 'content-type' : 'text/html' })
            res.end(`<h3 style="color:orangered;">Contador de visitas: ${contadorVisitas}</h3>`)
        }
        else if(ruta == '/reset') {
            contadorVisitas = 0
            res.writeHead(200, { 'content-type' : 'text/html' })
            res.end('<h3 style="color:crimson;">Reset Ok!</h3>')
        }
        else {
            res.writeHead(404, { 'content-type' : 'text/html' })
            res.end(`<h4 style="color:red;">ERROR 404: Ruta ${ruta} No encontrada!</h4>`)
        }
    }
    else {
        res.writeHead(500, { 'content-type' : 'text/html' })
        res.end(`<h4 style="color:red;">ERROR 500: Método ${metodo} de la ruta ${ruta} No implementado!</h4>`)
    }
})

const PORT = 8080
server.listen(PORT, () => console.log(`Servidor http escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))