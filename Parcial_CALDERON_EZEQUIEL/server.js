import express from 'express'
import config from './config.js'
//import Router from './router/productos.js'


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))





//app.use('/api/productos', new RouterProductos().start())



const PORT = config.PORT
const server = app.listen(PORT, 
    () => console.log(`Servidor http express escuchando en http://localhost:${PORT}`)
)
server.on('error', error => console.log(`Error en servidor: ${error.message}`))