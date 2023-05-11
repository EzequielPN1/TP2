const fs = require('fs')


const nombreArchivo = 'productos.json'


const obtenerProductos = (id) => { 
    try{

     const productos = JASON.parse(fs.readFileSync(nombreArchivo,'utf-8'))

    if(id) {
    const producto = productos.find( producto => producto.id == id )  
    return (producto || {}) // || short circuit operator
        }
         else {
          return (productos)        
        }

}catch{
       return id ? {} : []
}

}





const guardarPorducto = (producto) => {
    let productos = []

    try{
        productos = JASON.parse(fs.readFileSync(nombreArchivo,'utf-8'))
       }catch{}

       producto.id = (productos[productos.length - 1]?.id || 0) + 1       //?. -> optional chaining
       productos.push(producto)
   
       fs.writeFileSync(nombreArchivo,JSON.stringify(productos,null,'\t'))

       return producto

}




const actualizarPorducto = (id,producto) => {
    let productos = []

    try{
        productos = JASON.parse(fs.readFileSync(nombreArchivo,'utf-8'))
       }catch{}


    producto.id = id

    const indice = productos.findIndex(producto => producto.id === id)

    if(indice != -1) {
        const productoAnt = productos[indice]

        const productoNuevo = { ...productoAnt, ...producto }

        productos.splice(indice, 1, productoNuevo)
        fs.writeFileSync(nombreArchivo,JSON.stringify(productos,null,'\t'))
        return productoNuevo
    }
    else {
        productos.push(producto)
        fs.writeFileSync(nombreArchivo,JSON.stringify(productos,null,'\t'))
        return producto
    }
}




const borrarPorducto = (id) => {
    let productos = []

    try{
        productos = JASON.parse(fs.readFileSync(nombreArchivo,'utf-8'))
       }catch{}



    let producto = {}
    const indice = productos.findIndex(producto => producto.id == id)
    if(indice != -1) {
        producto = productos.splice(indice, 1)[0]
    }

    fs.writeFileSync(nombreArchivo,JSON.stringify(productos,null,'\t'))
    return producto
}




module.exports = {

    obtenerProductos,
    guardarPorducto,
    actualizarPorducto,
    borrarPorducto


}