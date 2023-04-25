
import http from 'http'
import fs from 'fs'


const server = http.createServer(async(req,res) => {

const {url:ruta,method:metodo} = req

console.log(metodo,ruta)
//parseador de metodos

if(metodo == 'GET'){


    
//parseador de rutas
if(ruta == '/'){

    const page = await fs.promises.readFile('./public/index.html')
    res.writeHead(200,{'content-type': 'text/html;charset=utf-8'})
    res.end(page)

}else if(ruta == '/clientes'){

    res.writeHead(200,{'content-type': 'text/html;charset=utf-8'})
    res.end('Obteniendo informacion de clientes')

}else if(ruta == '/usuarios'){

    res.writeHead(200,{'content-type': 'text/html;charset=utf-8'})
    res.end('Obteniendo informacion de usuarios')

}else if(ruta == '/productos'){

    res.writeHead(200,{'content-type': 'text/html;charset=utf-8'})
    res.end('Obteniendo informacion de productos')

}// rutas no atendidas (no declaras arriba)
else{
       
    res.writeHead(404,{'content-type': 'text/html;charset=utf-8'})
    res.end('Ruta no encontrada')

}


}// resto de los metodos (no implementados arriba)
else {
    res.writeHead(500,{'content-type': 'text/html;charset=utf-8'})
    res.end('Metodo no encontrado')
}


})

const PORT = 8080
server.listen(PORT, () => console.log(`Servidor http escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))