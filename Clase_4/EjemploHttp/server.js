const http = require('http')

const fs = require('fs') //para usar el archivo index

let contadorVisitas = 0




const server = http.createServer( async(req,res) => {

//const url = req.url
//const method = req.method

const {url:ruta,method:metodo} = req  // simplificando con "destructuring objet" y agregando alias (ruta y metodo ) a url y method


console.log(metodo,ruta)

// rutas GET del servidor

if(metodo == 'GET'){

if(ruta =='/'){

//------fs con callbacks
  /*
    fs.readFile('./public/index.html', (error,page) => {    
        if(!error){
            contadorVisitas++
            res.writeHead(200,{'content-type':'text/html'})    //para que interprete html en el texto
            res.end(page) //el archivo del file sistem o sea el index.html
        }else{
            res.writeHead(404,{'content-type':'text/html'})    //el 404 es codigo de error
            res.end(`<h1 style="color:red">ERROR 404: Recurso no encontrado</h1>`)  
        }
    })
 */

//-------fs con promise (async/await)

try{

    const page = await fs.promises.readFile('./public/index.html')
    contadorVisitas++
    res.writeHead(200,{'content-type':'text/html'})    //para que interprete html en el texto
    res.end(page) //el archivo del file sistem o sea el index.html

}catch(error){
    res.writeHead(404,{'content-type':'text/html'})    //el 404 es codigo de error
    res.end(`<h1 style="color:red">ERROR 404: ${error.message}</h1>`)  
}

}

else if(ruta == '/info'){
    res.writeHead(200,{'content-type':'text/html'})    //para que interprete html en el texto
    res.write(`<h1 style="color:blue">La fecha y hora actual es ${new Date().toLocaleString()}</h1>`)   
    res.end()  // es necesario para que el servidor termine la espera del buffer
}
else if(ruta == '/visitas'){
    res.writeHead(200,{'content-type':'text/html'})    //para que interprete html en el texto
    res.end(`<h1 style="color:red">Contador de visitas: ${contadorVisitas}</h1>`)   
}
else if(ruta == '/reset'){
    contadorVisitas = 0
    res.writeHead(200,{'content-type':'text/html'})    //para que interprete html en el texto
    res.end(`<h1 >Reset ok</h1>`)   
}
else{
    res.writeHead(404,{'content-type':'text/html'})
    res.end(`<h1 style="color:red" >ERROR 404: Ruta no encontra: ${ruta}</h1>`) 
}

}else{
    res.writeHead(500,{'content-type':'text/html'})
    res.end(`<h1 style="color:red" >ERROR 500: Metodo ${metodo} de la ruta ${ruta} no implementado</h1>`) 
}

}) 



const PORT = 8080
server.listen(PORT, () => console.log(`Servidor http escuchando en http://localhost:${PORT}`))
server.on('error',error => console.log(`Error en el servidor:${error.message}`))

//minuto 2:12