const productos = [
    { id: 1, nombre: 'TV', precio: 1234, stock: 55 },
    { id: 2, nombre: 'Mesa', precio: 234, stock: 23 },
    { id: 3, nombre: 'Mouse', precio: 123, stock: 436 },
]

const obtenerProductos = id => {
    if(id) {
        const producto = productos.find( producto => producto.id == id )  
        //console.log(producto)
        return producto || {} // || short circuit operator
    }
    else {
        return productos
    }    
}

const guardarProducto = producto => {
    producto.id = (productos[productos.length - 1]?.id || 0) + 1       //?. -> optional chaining
    productos.push(producto)

    return producto
}


const actualizarProducto = (id, producto) => {
    producto.id = id

    const indice = productos.findIndex(producto => producto.id === id)
    if(indice != -1) {
        const productoAnt = productos[indice]
        const productoNuevo = { ...productoAnt, ...producto }

        productos.splice(indice, 1, productoNuevo)
        return productoNuevo
    }
    else {
        productos.push(producto)
        return producto
    }
}

const borrarProducto = id => {
    let producto = {}

    const indice = productos.findIndex(producto => producto.id == id)

    if(indice != -1) {
        producto = productos.splice(indice, 1)[0]
    }

    return producto
}

export default {
    obtenerProductos,
    guardarProducto,
    actualizarProducto,
    borrarProducto
}