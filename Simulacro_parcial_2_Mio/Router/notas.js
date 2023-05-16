import notas from "../Controlador/notas.js"
import express from "express";



const router = express.Router()

router.get("/obtenerListadoTotal",notas.obtenerListadoTotal)
router.post("/guardarNota",notas.guardarNota)
router.get("/obtenerPromedioTotal",notas.obtenerPromedioTotal)
router.get("/promedioNotasPorCurso",notas.promedioNotasPorCurso)
router.get("/cantNotasIngresadas",notas.cantNotasIngresadas)
router.get("/cantidadNotasPorCurso",notas.cantidadNotasPorCurso)
router.get("/obtenerNotaMasBaja",notas.obtenerNotaMasBaja)
router.get("/obtenerNotaMasAlta",notas.obtenerNotaMasAlta)


export {
    router
}
