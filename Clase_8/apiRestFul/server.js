import express from 'express'
import RouterProductos from './router/productos.js'

import config from './config.js'


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// -----------------------------------------------------
//              API RESTful : Productos
// -----------------------------------------------------
app.use('/api/productos', new RouterProductos().start())

// -------------------------------------------------
//          LISTEN DEL SERVIDOR EXPRESS
// -------------------------------------------------
const PORT = config.PORT
const server = app.listen(PORT, 
    () => console.log(`Servidor http express escuchando en http://localhost:${PORT}`)
)
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
