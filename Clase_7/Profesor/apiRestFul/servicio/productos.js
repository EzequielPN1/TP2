//const model = require('../model/productosMem')
const model = require('../model/productosFile')


const obtenerProductos = id => {
    const productos = model.obtenerProductos(id)
    return productos
}

const guardarProducto = producto => {
    const productoGuardado = model.guardarProducto(producto)
    return productoGuardado
}

const actualizarProducto = (id, producto) => {
    const productoActualizado = model.actualizarProducto(id,producto)
    return productoActualizado
}

const borrarProducto = id => {
    const productoBorrado = model.borrarProducto(id)
    return productoBorrado
}

module.exports = {
    obtenerProductos,
    guardarProducto,
    actualizarProducto,
    borrarProducto
}