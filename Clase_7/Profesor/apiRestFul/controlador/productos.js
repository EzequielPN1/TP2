const servicio = require('../servicio/productos')

const obtenerProductos = (req,res) => {
    const { id } = req.params
    const productos = servicio.obtenerProductos(id)

    res.json(productos)
}

const guardarProducto = (req,res) => {
    const producto = req.body
    const productoGuardado = servicio.guardarProducto(producto)
    
    res.json(productoGuardado)
}


const actualizarProducto = (req,res) => {
    const id = Number(req.params.id)
    const producto = req.body

    const productoActualizado = servicio.actualizarProducto(id, producto)

    res.json(productoActualizado)
}

const borrarProducto = (req,res) => {
    const { id } = req.params
    const productoBorrado = servicio.borrarProducto(id)
    
    res.json(productoBorrado)
}


module.exports = {
    obtenerProductos,
    guardarProducto,
    actualizarProducto,
    borrarProducto
}