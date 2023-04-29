import express from 'express'


const productos = [
    { id: 1, nombre: 'TV', precio: 1234, stock: 55 },
    { id: 2, nombre: 'Mesa', precio: 234, stock: 23 },
    { id: 3, nombre: 'Mouse', precio: 123, stock: 436 },
]

const app = express()

// --------------------- API REST FUL -------------------------

// GET
app.get('/productos', (req,res) => {
    res.json(productos)
})

app.get('/productos/:id', (req,res) => {
    //console.log(req.params)
    const { id } = req.params
    //console.log(id)

    const producto = productos.find( producto => producto.id == id ) || {}  // || short circuit operator
    console.log(producto)

    res.json(producto)
})

// POST
app.post('/productos', (req,res) => {
    res.send('POST producto')
})

// PUT
app.put('/productos', (req,res) => {
    res.send('PUT producto')
})

// DELETE
app.delete('/productos', (req,res) => {
    res.send('DELETE producto')
})

// -------------------------------------------------
//          LISTEN DEL SERVIDOR EXPRESS
// -------------------------------------------------
const PORT = 8080
const server = app.listen(PORT, 
    () => console.log(`Servidor http express escuchando en http://localhost:${PORT}`)
)
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
