import Controlador from "../Controlador/notas.js"
import express from "express";

class Router {

    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }

    start() {
        this.router.post("/ingreso", this.controlador.guardarNota)
        this.router.get("/listado", this.controlador.obtenerListado)
        this.router.get("/promedio", this.controlador.obtenerPromedioTotal)
        this.router.get("/minmax", this.controlador.obtenerMinMax)
        this.router.get("/cantidad", this.controlador.cantNotasIngresadas)

        return this.router
    }
}







export default Router
