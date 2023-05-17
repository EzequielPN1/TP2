import fs from 'fs'

const nombreArchivo = 'productos.json'

const obtenerProductos = id => {
    try {
        const productos = JSON.parse(fs.readFileSync(nombreArchivo, 'utf-8'))
        if(id) {
            const producto = productos.find( producto => producto.id == id )  
            //console.log(producto)
            return producto || {} // || short circuit operator
        }
        else {
            return productos
        }    
    }
    catch {
        return id? {} : []
    }
}

const guardarProducto = producto => {
    let productos = []
    try {
        productos = JSON.parse(fs.readFileSync(nombreArchivo, 'utf-8'))
    }
    catch {}

    producto.id = (productos[productos.length - 1]?.id || 0) + 1       //?. -> optional chaining
    productos.push(producto)

    fs.writeFileSync(nombreArchivo, JSON.stringify(productos, null, '\t'))

    return producto
}


const actualizarProducto = (id, producto) => {
    let productos = []
    try {
        productos = JSON.parse(fs.readFileSync(nombreArchivo, 'utf-8'))
    }
    catch {}

    producto.id = id

    const indice = productos.findIndex(producto => producto.id === id)
    if(indice != -1) {
        const productoAnt = productos[indice]
        const productoNuevo = { ...productoAnt, ...producto }

        productos.splice(indice, 1, productoNuevo)
        fs.writeFileSync(nombreArchivo, JSON.stringify(productos, null, '\t'))

        return productoNuevo
    }
    else {
        productos.push(producto)
        fs.writeFileSync(nombreArchivo, JSON.stringify(productos, null, '\t'))

        return producto
    }
}

const borrarProducto = id => {
    let productos = []
    try {
        productos = JSON.parse(fs.readFileSync(nombreArchivo, 'utf-8'))
    }
    catch {}

    let producto = {}

    const indice = productos.findIndex(producto => producto.id == id)

    if(indice != -1) {
        producto = productos.splice(indice, 1)[0]
    }

    fs.writeFileSync(nombreArchivo, JSON.stringify(productos, null, '\t'))

    return producto
}

export default {
    obtenerProductos,
    guardarProducto,
    actualizarProducto,
    borrarProducto
}