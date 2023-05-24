import Servicio from "../Servicio/notas.js"


class Controlador {

    constructor() {
        this.servicio = new Servicio()
    }

    guardarNota = async (req, res) => {
        const nota = req.body

        const notaGuardada = await this.servicio.guardarNota(nota)

        res.json(notaGuardada)
    }



    obtenerListado = async (req, res) => {
        try {
            let listaDeNotas = await this.servicio.obtenerListado()
            let devolver = { notas: [] }

            listaDeNotas.forEach(element => {
                devolver.notas.push(element)
            });

            res.json(devolver)
        }
        catch (error) {
            console.log('error obtener Notas', error)
        }
    }




    obtenerPromedioTotal = async (req, res) => {
        try {
            let promedioObtenido = await this.servicio.obtenerPromedioTotal()
            res.json({ promedioObtenido })
        }
        catch (error) {
            console.log('error obtenerPromedioTotal', error)
        }
    }





    cantNotasIngresadas = async (req, res) => {
        try {
            let cantNotasIngresadas = await this.servicio.cantNotasIngresadas()
            res.json({ cantNotasIngresadas })
        }
        catch (error) {
            console.log('error obtener cantNotasIngresadas', error)
        }
    }




    obtenerMinMax = async (req, res) => {
        try {
            const notaMin = await this.servicio.obtenerNotaMin()
            const notaMax = await this.servicio.obtenerNotaMax()
            res.json({ min: notaMin, max: notaMax })
        }
        catch (error) {
            console.log('Error al obtener nota minima y nota maxima: ', error)
        }
    }

}



export default Controlador