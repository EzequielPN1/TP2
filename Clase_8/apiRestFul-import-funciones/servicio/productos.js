//import model from '../model/productosMem.js'
import model from '../model/productosFile.js'


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

export default {
    obtenerProductos,
    guardarProducto,
    actualizarProducto,
    borrarProducto
}