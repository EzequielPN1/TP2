const express = require('express') 

const app = express()  
app.use(express.static('public'))
app.use(express.json()) 
app.use(express.urlencoded({extended: true})) 


const libros = [
    {id:1,titulo:'Libro 1',autor:'autor 1',anio:1999},
    {id:2,titulo:'Libro 2',autor:'autor 2',anio:2001},
    {id:3,titulo:'Libro 3',autor:'autor 3',anio:1985},
]
  


//libros GET (Obtiene todos los libros almacenados en un array en el servidor)
app.get('/api/Libros',(req,res) => {  

        res.json(libros ) 
 
 })

//libros:id GET (Obtiene un libro por su id)
 app.get('/api/Libros/:id',(req,res) => { 

    const { id } = req.params
 
    const libro = libros.find(producto => producto.id == id) 
 
    res.json(libro || {}) 
 
 })

//libros POST (Incorpora un libro)
 app.post('/api/Libros',(req,res) => { 
    const libro = req.body
              
    libro.id = (libros[libros.length - 1]?.id || 0) +1  // 

    libros.push(libro)

    res.redirect('/')
})

//libros:id PUT (Actualiza un libro por su id)
app.put('/api/Libros/:id',(req,res) => { 
    const id = Number(req.params.id)
    const libro = req.body

    libro.id = id

    const indice = libros.findIndex(libro => libro.id === id)

    if(indice != -1){

        const libroAnt = libros[indice]

        const libroNuevo = {...libroAnt,...libro}

     libros.splice(indice,1,libroNuevo) 
     res.json(libroNuevo)
        
    }else{

        productos.push(libro)
        res.json(libro)
    }
    

})

//libros:id DELETE (Borra un libro por su id)
app.delete('/api/Libros/:id',(req,res) => { 
    const {id} = req.params

    let libro = {}   

    const indice = libros.findIndex(libro => libro.id == id)
    if(indice != -1){
        libros.splice(indice,1)[0] 
    }  
        res.json(libro)   
    })




















//-----------------------------------------Listen del servidor express------------------------------------------------------------


const PORT = 8080

// el metodo listen devuelve el servidor que utiliza express para referenciar en server
const server = app.listen(PORT, () => console.log(`Servidor http express escuchando en http://localhost:${PORT}`))

//Error por abrir otro servidor http en el mismo puerto
server.on('error', error => console.log(`Error en servidor: ${error.message}`))