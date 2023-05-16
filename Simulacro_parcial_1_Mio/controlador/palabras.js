import palabras from '../servicio/palabras.js'


const obtenerPalabras = (req,res) => {

    
    const palabrasObtenidas =  palabras.obtenerPalabras()
    
    res.json(palabrasObtenidas)

}


const guardarPalabra = (req,res) => {
    const palabra = req.body
    const palabraGuardada = palabras.guardarPalabra(palabra)

    res.json(palabraGuardada)
}


export default{
    obtenerPalabras,
    guardarPalabra
}