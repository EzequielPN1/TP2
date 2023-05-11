const model = require('../model/productosMemoria')
//const model = require('../model/productosFile')

const obtenerProductos = (id) => { 
         const productos = model.obtenerProductos(id)
         return productos
    }


const guardarPorducto = (producto) => {
    const productoGuardado = model.guardarPorducto(producto)
    return productoGuardado
}


const actualizarPorducto = (id,producto) => {
    const productoActualizado = model.actualizarPorducto(id,producto)
    return productoActualizado
}


const borrarPorducto = (id) => {
     const productoBorrado = model.borrarPorducto(id)
     return productoBorrado
}


module.exports = {

    obtenerProductos,
    guardarPorducto,
    actualizarPorducto,
    borrarPorducto


}