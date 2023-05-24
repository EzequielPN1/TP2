import notas from "../Controlador/notas.js"
import express from "express";



const router = express.Router()

router.get("/listado", notas.obtenerListado)
router.get("/promedio", notas.obtenerPromedioTotal)
router.get("/minmax", notas.obtenerMinMax)
router.get("/cantidad", notas.cantNotasIngresadas)



export {
    router
}
