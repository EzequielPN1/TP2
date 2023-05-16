import ServicioNotas from '../servicio/notas.js'

class ControladorNotas {

    constructor() {
        this.servicioNotas = new ServicioNotas()
    }

    obtenerNotas = async (req,res) => {
        try {
            const notas = await this.servicioNotas.obtenerNotas()

            res.send(notas)
        }
        catch(error) {
            console.log('error obtenerNotas', error)
        }
    }

    obtenerPromedioTotal = async (req,res) => {
        try {
            const promedio = await this.servicioNotas.obtenerPromedioTotal()
            res.json({promedio})
        }
        catch(error) {
            console.log('error obtenerPromedioTotal', error)
        }
    }

    obtenerPromedioCurso = async (req,res) => {
        try {
            const { curso } = req.params
            const promedio = await this.servicioNotas.obtenerPromedioCurso(curso)

            res.json({curso, promedio})
        }
        catch(error) {
            console.log('error obtenerPromedioCurso', error)
        }
    }

    obtenerCantidadNotas = async (req,res) => {
        try {
            const cantidad = await this.servicioNotas.obtenerCantidadNotas()
            res.json({cantidad})
        }
        catch(error) {
            console.log('error obtenerCantidadNotas', error)
        }
    }

    obtenerCantidadNotasCurso = async (req,res) => {
        try {
            const { curso } = req.params
            const cantidad = await this.servicioNotas.obtenerCantidadNotasCurso(curso)

            res.json({curso, cantidad})
        }
        catch(error) {
            console.log('error obtenerCantidadNotasCurso', error)
        }
    }

    obtenerCantidadNotaBaja = async (req,res) => {
        try {
            const nota = await this.servicioNotas.obtenerCantidadNotaBaja()
            res.json({notaBaja: nota})
        }
        catch(error) {
            console.log('error obtenerCantidadNotaBaja', error)
        }
    }

    obtenerCantidadNotaAlta = async (req,res) => {
        try {
            const nota = await this.servicioNotas.obtenerCantidadNotaAlta()
            res.json({notaAlta: nota})
        }
        catch(error) {
            console.log('error obtenerCantidadNotaAlta', error)
        }
    }

    guardarNota = async (req,res) => {
        try {
            let nota = req.body
            //console.log(nota)
            let notaGuardada = await this.servicioNotas.guardarNota(nota)

            res.json(notaGuardada)
        }
        catch(error) {
            console.log('error obtenerNotas', error)
        }
    }
}

export default ControladorNotas
