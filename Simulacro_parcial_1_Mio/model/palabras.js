
const listaPalabras =[]



const obtenerPalabras = () => {
    return listaPalabras
}


const guardarPalabra = (texto) => {
    const nuevoId = (listaPalabras[listaPalabras.length - 1]?.id || 0) + 1;
    var fechaActual = new Date();
    var nuevoTimestamp = fechaActual.getTime();
    console.log(nuevoTimestamp);
  
    let item = {
      id: nuevoId,
      palabra: texto,
      timestamp: nuevoTimestamp
    };

    listaPalabras.push(item);

    return item;
  }
  


  export default {
    obtenerPalabras,
    guardarPalabra
  }

