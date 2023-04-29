//https://www.npmjs.com/package/express
//https://github.com/expressjs/express
//https://expressjs.com/
import express from 'express'

//console.log( process.cwd() )

const controladorRutaDefault = (req,res) => {
    const { url, method } = req
    res.status(404).send(`<p style="color: red;">
                Ruta ${method} <span style="color: blueviolet;">${url}</span> no encontrada
              </p>`)
}

const app = express()
app.use(express.static('public'))

// -------------------------------------------------------------------------
/* app.get('/', (req,res) => {
    res.send('Hola soy el servidor express')
    //res.sendFile(process.cwd() + '/public/index.html')
}) */

app.get('/clientes', (req,res) => {
    res.send('Obteniendo información de clientes')
})

app.get('/usuarios', (req,res) => {
    res.send('Obteniendo información de usuarios')
})

app.get('/productos', (req,res) => {
    res.send('Obteniendo información de productos')
})

/* app.get('/ping', (req,res) => {
    res.send('pong')
}) */

// Rutas GET no implementadas
app.get('*', controladorRutaDefault)

// -------------------------------------------------------------------------
// Rutas POST no implementadas
app.post('*', controladorRutaDefault)

// -------------------------------------------------------------------------
// Rutas PUT no implementadas
app.put('*', controladorRutaDefault)

// -------------------------------------------------------------------------
// Rutas DELETE no implementadas
app.delete('*', controladorRutaDefault)


// -------------------------------------------------
//          LISTEN DEL SERVIDOR EXPRESS
// -------------------------------------------------
const PORT = 8080
const server = app.listen(PORT, 
    () => console.log(`Servidor http express escuchando en http://localhost:${PORT}`)
)
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
