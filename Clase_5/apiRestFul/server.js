//import express from "express"; // va con module en el package jason


const express = require('express') 


const app = express()  // es una instancia del servidor en express 

app.use(express.static('public'))


app.use(express.json()) //para crear una propiedad body para el post poder enviar el objeto
app.use(express.urlencoded({extended: true})) 


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

//-----------------------------------------API REST FUL -------------------------------------------------------------------------

//Verbos http:



//GET  (conseguir)


/*
//Devolver la lista de productos
app.get('/api/Productos',(req,res) => { 
    res.json(productos)  

})



//-Parametros por Ruta:

//Para devolver un elemento de la lista 
app.get('/Productos/:id',(req,res) => { 

   const { id } = req.params

   const producto = productos.find(producto => producto.id == id) 
   // el metodo find si no encuentra un  elemento devuelve undefined ,
   // el not not considera el valor que tiene a la derecha

   res.json(producto || {}) // || {}  short circuit operator, si producto es undefined va por el or

})
*/


// unir la posibilidad de devolver la lista de productos o devolver el producto solo:
app.get('/api/Productos/:id?',(req,res) => {  

    const { id } = req.params

    if(id){

        const producto = productos.find(producto => producto.id == id) 
     
        res.json(producto || {}) // || {}  short circuit operator, si producto es undefined va por el otro 
    }else{
        res.json(productos ) 
    }
 
 })



//POST  (Correo)
app.post('/api/Productos',(req,res) => { 
    const producto = req.body
    console.log(producto)

                  //?. : optional chaining ,el operador ? pregunta si la izquierda esta definida 
    producto.id = (productos[productos.length - 1]?.id || 0) +1  // 

    productos.push(producto)

    //res.json(producto)
    res.redirect('/')// para volver al la ruta raiz en este caso al formulario, es un metodo de express
})

/*
//PUT   (poner producto o actualizar producto)---------------------------(actualizacion)-----------------------------------------
app.put('/api/Productos/:id',(req,res) => { 
    const id = Number(req.params.id)
    const producto = req.body

    producto.id = id

    console.log(id,producto)

    const indice = productos.findIndex(producto => producto.id === id)

    if(indice != -1){

        productos.splice(indice,1,producto) // borra apartir del indice pasado borra la cantidad seguida por la coma,tercera coma agrega en esa posicion el objeto
        
    }else{

        productos.push(producto)

    }
    
        res.json(producto)
    

})
*/
//-------------------------------------------------------------(Actualizacion TOTAL/PARCIAL)----------------------------------------------

app.put('/api/Productos/:id',(req,res) => { 
    const id = Number(req.params.id)
    const producto = req.body

    producto.id = id

    console.log(id,producto)

    const indice = productos.findIndex(producto => producto.id === id)

    if(indice != -1){

        const productoAnt = productos[indice]

    //-----------------------------------------------------------------------------
    //    Spread Operator (...) + Object Merge
    //-----------------------------------------------------------------------------






    //-----------------------------------------------------------------------------

     const productoNuevo = {...productoAnt,...producto}


     productos.splice(indice,1,productoNuevo) 
     res.json(productoNuevo)
        
    }else{

        productos.push(producto)
        res.json(producto)
    }
    

})






//DELETE
app.delete('/api/Productos/:id',(req,res) => { 
const {id} = req.params

let producto = {}

console.log(id)

const indice = productos.findIndex(producto => producto.id == id)

if(indice != -1){
    productos.splice(indice,1)[0] // borra apartir del indice pasado borra la cantidad seguida por la coma
}

    res.json(producto)

})



//-----------------------------------------Listen del servidor express------------------------------------------------------------


const PORT = 8080

// el metodo listen devuelve el servidor que utiliza express para referenciar en server
const server = app.listen(PORT, () => console.log(`Servidor http express escuchando en http://localhost:${PORT}`))

//Error por abrir otro servidor http en el mismo puerto
server.on('error', error => console.log(`Error en servidor: ${error.message}`))





