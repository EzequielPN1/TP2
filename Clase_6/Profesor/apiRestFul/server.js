const express = require('express')


const productos = [
    { id: 1, nombre: 'TV', precio: 1234, stock: 55 },
    { id: 2, nombre: 'Mesa', precio: 234, stock: 23 },
    { id: 3, nombre: 'Mouse', precio: 123, stock: 436 },
]

const app = express()
app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// --------------------- API REST FUL -------------------------

// GET
/* app.get('/productos', (req,res) => {
    res.json(productos)
})

app.get('/productos/:id', (req,res) => {
    //console.log(req.params)
    const { id } = req.params
    //console.log(id)

    const producto = productos.find( producto => producto.id == id )  
    console.log(producto)

    res.json(producto || {}) // || short circuit operator
}) */

// -----------------------------------------------------
//              API RESTful : Productos
// -----------------------------------------------------

// ---------- GET ----------
app.get('/api/productos/:id?', (req,res) => {
    //console.log(req.params)
    const { id } = req.params
    console.log(id)

    if(id) {
        const producto = productos.find( producto => producto.id == id )  
        console.log(producto)
    
        res.json(producto || {}) // || short circuit operator
    }
    else {
        res.json(productos)        
    }
})


// ---------- POST ----------
app.post('/api/productos', (req,res) => {
    const producto = req.body
    console.log(producto)

    producto.id = (productos[productos.length - 1]?.id || 0) + 1       //?. -> optional chaining
    productos.push(producto)

    res.json(producto)
    //res.redirect('/')
})

// ---------- PUT (actualización total) ----------
/* app.put('/api/productos/:id', (req,res) => {
    const id = Number(req.params.id)
    const producto = req.body
    producto.id = id

    console.log(id, producto)


    const indice = productos.findIndex(producto => producto.id === id)

    if(indice != -1) {
        productos.splice(indice, 1, producto)
    }
    else {
        productos.push(producto)
    }

    res.json(producto)
}) */

// ---------- PUT (actualización total/parcial) ----------
app.put('/api/productos/:id', (req,res) => {
    const id = Number(req.params.id)
    const producto = req.body
    producto.id = id

    console.log(id, producto)

    const indice = productos.findIndex(producto => producto.id === id)
    if(indice != -1) {
        const productoAnt = productos[indice]
        // --------------------------------------------------------------------------------------------------
        //    Spread Operador (...) + Object Merge
        // --------------------------------------------------------------------------------------------------
        // productoAnt = { id: 2, nombre: 'Mesa', precio: 234, stock: 23 } 
        // producto = { precio : 777 }
        // ---> productoNuevo = { ...productoAnt, ...producto }
        //                  1)  { ...{ id: 2, nombre: 'Mesa', precio: 234, stock: 23 }, ...{ precio : 777 } }  
        //                  2)  { id: 2, nombre: 'Mesa', precio: 234, stock: 23, precio : 777 }  
        //                  3)  { id: 2, nombre: 'Mesa', stock: 23, precio : 777 }
        // --------------------------------------------------------------------------------------------------
        const productoNuevo = { ...productoAnt, ...producto }
        // --------------------------------------------

        productos.splice(indice, 1, productoNuevo)
        res.json(productoNuevo)
    }
    else {
        productos.push(producto)
        res.json(producto)
    }
})

// ---------- DELETE ----------
app.delete('/api/productos/:id', (req,res) => {
    const { id } = req.params
    let producto = {}
    console.log(id)

    const indice = productos.findIndex(producto => producto.id == id)

    if(indice != -1) {
        producto = productos.splice(indice, 1)[0]
    }

    res.json(producto)
})

// -------------------------------------------------
//          LISTEN DEL SERVIDOR EXPRESS
// -------------------------------------------------
const PORT = 8080
const server = app.listen(PORT, 
    () => console.log(`Servidor http express escuchando en http://localhost:${PORT}`)
)
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
