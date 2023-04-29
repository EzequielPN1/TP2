

import express from "express";

const app = express()

const controladorRutaDefault = (req,res) => {
    const {url,method}=req
    res.status(404).send(`<p style="color:red";>  Ruta ${method}   <span style="color:blueviolet;"> ${url} </span>        no encontrada </p>`)
}



//--------------------------------------------------------------------------------------------------------------------------------


app.get('/clientes',(req,res) => { 
    res.send('Obteniendo informacion de clientes')  //el end en express cambia por send
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






const PORT = 8080

// el metodo listen devuelve el servidor que utiliza express para referenciar en server
const server = app.listen(PORT, () => console.log(`Servidor http express escuchando en http://localhost:${PORT}`))

//Error por abrir otro servidor http en el mismo puerto
server.on('error', error => console.log(`Error en servidor: ${error.message}`))

