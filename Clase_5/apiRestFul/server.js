import express from "express";


const app = express()  


const productos = [
    {id: 1, nombre: 'TV',precio: 1234,stock: 55},
    {id: 2, nombre: 'MESA',precio: 234,stock: 23},
    {id: 3, nombre: 'MOUSE',precio: 123,stock: 436},
]

//--------------------------------------------------------------------------------------------------------------------------------

//Ruta raiz
app.get('/',(req,res) => { 

    res.send(`<h1> Hola soy el servidor express <h1>`)  

})

//-----------------------------------------API REST FUL ----------------------------------------------------

//Verbos http:

//GET
app.get('/Productos',(req,res) => { 
    res.json(productos)  

})

//Parametros por Ruta

app.get('/Productos/:id',(req,res) => { 

   const { id } = req.params

   const producto = productos.find(producto => producto.id == id) || {}  
   // el metodo find si no encuentra un  elemento devuelve undefined ,
   // el not not considera el valor que tiene a la derecha

   res.json(producto)

})


//POST
app.post('/Productos',(req,res) => { 
    res.send('POST producto')

})


//PUT
app.put('/Productos',(req,res) => { 
    res.send('PUT producto')

})


//DELETE
app.delete('/Productos',(req,res) => { 
    res.send('DELETE producto')

})



//-----------------------------------------Listen del servidor express------------------------------------------------------------


const PORT = 8080

// el metodo listen devuelve el servidor que utiliza express para referenciar en server
const server = app.listen(PORT, () => console.log(`Servidor http express escuchando en http://localhost:${PORT}`))

//Error por abrir otro servidor http en el mismo puerto
server.on('error', error => console.log(`Error en servidor: ${error.message}`))





