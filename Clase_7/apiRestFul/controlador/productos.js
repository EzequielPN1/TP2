const servicio = require('../servicio/productos')



const obtenerProductos = (req,res) => {
    const { id } = req.params
    const productos =  servicio.obtenerProductos(id)
    
    res.json(productos)

}


const guardarPorducto = (req,res) => {
    const producto = req.body
    const productoGuardado = servicio.guardarPorducto(producto)

    res.json(productoGuardado)
}



const actualizarPorducto = (req,res) => {
    const id = Number(req.params.id)
    const producto = req.body
    
   const productoActualizado =  servicio.actualizarPorducto(id,producto)

     res.json(productoActualizado)

}




const borrarPorducto = (req,res) => {
    const { id } = req.params
   const productoBorrado = servicio.borrarPorducto(id)

    res.json(productoBorrado)
}


module.exports = {

    obtenerProductos,
    guardarPorducto,
    actualizarPorducto,
    borrarPorducto


}