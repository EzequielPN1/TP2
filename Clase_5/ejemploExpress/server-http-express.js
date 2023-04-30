

import express from "express";



const app = express()  //instancia de express
app.use(express.static('public'))

//Funcion de controlador de Ruta
const controladorRutaDefault = (req,res) => {
    const {url,method}=req
    res.status(404).send(`<p style="color:red";>  Ruta ${method}   <span style="color:blueviolet;"> ${url} </span>        no encontrada </p>`)
}



//--------------------------------------------------------------------------------------------------------------------------------


app.get('/',(req,res) => { 

    res.send(`<h1> Hola soy el servidor express <h1>`)  //el end en express cambia por send
   // process.cwd(): metodo que devuelve la ruta del proyecto

   //res.sendFile(process.cwd() + '/public/index.html')  

})

app.get('/clientes',(req,res) => { 
    res.send('Obteniendo informacion de clientes')
})

app.get('/usuarios',(req,res) => { 
    res.send('Obteniendo informacion de usuarios')
})

app.get('/productos',(req,res) => { 
    res.send('Obteniendo informacion de productos')
})

//Rutas GET no implementada
app.get('*',(req,res) => { 
    const {url}=req
    res.send(`<p style="color:red";>  Ruta GET      <span style="color:blueviolet;"> ${url} </span>        no encontrada </p>`)
})


//--------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------Rutas no impletementadas----------------------------------------------------------------



//Rutas POST no implementada

/*
app.post('*',(req,res) => { 
    const {url}=req
    res.send(`<p style="color:red";>  Ruta POST      <span style="color:blueviolet;"> ${url} </span>        no encontrada </p>`)
})
*/

app.post('*',controladorRutaDefault)

//--------------------------------------------------------------------------------------------------------------------------------

//Rutas PUT no implementada

/*
app.put('*',(req,res) => { 
    const {url}=req
    res.send(`<p style="color:red";>  Ruta PUT      <span style="color:blueviolet;"> ${url} </span>        no encontrada </p>`)
})
*/
app.put('*',controladorRutaDefault)



//--------------------------------------------------------------------------------------------------------------------------------

//Rutas DELETE no implementada

/*
app.delete('*',(req,res) => { 
    const {url}=req
    res.send(`<p style="color:red";>  Ruta DELETE    <span style="color:blueviolet;"> ${url} </span>        no encontrada </p>`)
})
*/

app.delete('*',controladorRutaDefault)

//--------------------------------------------------------------------------------------------------------------------------------



//-----------------------------------------Listen del servidor express------------------------------------------------------------


const PORT = 8080

// el metodo listen devuelve el servidor que utiliza express para referenciar en server
const server = app.listen(PORT, () => console.log(`Servidor http express escuchando en http://localhost:${PORT}`))

//Error por abrir otro servidor http en el mismo puerto
server.on('error', error => console.log(`Error en servidor: ${error.message}`))





