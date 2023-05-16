import ServicioPalabras from '../servicio/palabras.js'

class ControladorPalabras {

    constructor() {
        this.servicioPalabras = new ServicioPalabras()
    }

    obtenerPalabras = async (req,res) => {
        try {
            let id = req.params.id
            //console.log(id)
            let palabras = await this.servicioPalabras.obtenerPalabras(id)

            res.send(palabras)
        }
        catch(error) {
            console.log('error obtenerPalabras', error)
        }
    }

    guardarPalabra = async (req,res) => {
        try {
            let palabra = req.body
            //console.log(Palabra)
            let palabraGuardada = await this.servicioPalabras.guardarPalabra(palabra)

            res.json(palabraGuardada)
        }
        catch(error) {
            console.log('error obtenerPalabras', error)
        }
    }
}

export default ControladorPalabras
