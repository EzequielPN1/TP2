import PalabrasMem from '../model/DAOs/PalabrasMem.js'

class ServicioPalabras {

    constructor() {
        this.palabrasMem = new PalabrasMem()
    }

    async obtenerPalabras(id) { 
        let palabras = await this.palabrasMem.obtenerPalabras(id)
        return palabras.map(p => p.palabra).join(' ')
    }

    async guardarPalabra(palabra) { 
        return await this.palabrasMem.guardarPalabra(palabra) 
    }
}

export default ServicioPalabras
