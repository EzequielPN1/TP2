class PalabrasMem {

    constructor() {
        this.palabras = []
    }

    getNext_Id(palabras) {
        let lg = palabras.length
        return lg? parseInt(palabras[lg-1].id) + 1 : 1
    }

    obtenerPalabras = async () => {
        try {
            return this.palabras
        }
        catch(error) {
            console.log('error en obtenerPalabras', error)
            return []
        }
    }

    guardarPalabra = async palabra => {
        try {
            let id = this.getNext_Id(this.palabras)
            let timestamp = Date.now()
            palabra.id = id
            palabra.timestamp = timestamp
            this.palabras.push(palabra)

            return palabra
        }
        catch(error) {
            console.log('error en guardarPalabra:',error)
            let palabra = {}

            return palabra
        }
    }
}

export default PalabrasMem