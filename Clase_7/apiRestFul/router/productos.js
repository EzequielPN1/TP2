const express = require('express')
const controlador = require('../controlador/productos')

const router = express.Router()


router.get('/:id?', controlador.obtenerProductos)
router.post('/', controlador.guardarPorducto)
router.put('/:id', controlador.actualizarPorducto)
router.delete('/:id', controlador.borrarPorducto)


module.exports = router

