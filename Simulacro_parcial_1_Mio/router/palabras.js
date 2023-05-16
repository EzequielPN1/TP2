import palabras from '../controlador/palabras.js'
import express from "express";



const router = express.Router()

router.get("/obtenerPalabras", palabras.obtenerPalabras)
router.post("/guardarPalabra", palabras.guardarPalabra)




export {
    router
}



