import express from 'express'
import RouterPalabras from './router/palabras.js'

const app = express()

app.use(express.static('public'))
app.use(express.json())

const routerPalabras = new RouterPalabras()

/* ------------------------------------------------------------- */
/*             ZONA DE RUTAS MANEJADAS POR EL ROUTER             */
/* ------------------------------------------------------------- */
app.use('/api/palabras', routerPalabras.start())

/* ------------------------------------------------------------- */
/*                      Servidor LISTEN                          */
/* ------------------------------------------------------------- */
const PORT = 8080
const server = app.listen(PORT, 
    () => console.log(`Servidor express escuchando en http://localhost:${PORT}`)
)
server.on('error', error => console.log('Servidor express en error:', error) )
