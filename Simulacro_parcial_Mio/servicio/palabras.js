import palabras from '../model/palabras.js'

const obtenerPalabras = () => { 
    const palabrasObtenidas = palabras.obtenerPalabras()
    const textos = []
    
    palabrasObtenidas.forEach(element => textos.push(element.palabra));

    const resultado = textos.map(objeto => objeto.palabra).join(' ');

   
    return resultado;
}


const guardarPalabra = (palabra) => {
const palabraGuardada = palabras.guardarPalabra(palabra)
return palabraGuardada
}



export default{
   obtenerPalabras,
   guardarPalabra
}
