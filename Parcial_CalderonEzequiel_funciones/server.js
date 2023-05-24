import express from 'express'
import RouterNotas from './Router/notas.js'
import config from './config.js'

const app = express()

app.use(express.static('public'))
app.use(express.json())




app.use('/notas', new RouterNotas().start())



const PORT = config.PORT
const server = app.listen(PORT, 
    () => console.log(`Servidor express escuchando en http://localhost:${PORT}`)
)
server.on('error', error => console.log('Servidor express en error:', error) )