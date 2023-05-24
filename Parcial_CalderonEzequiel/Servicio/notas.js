import notas from "../Model/notas.js"



  const obtenerListado = async () => { 
  let notasObtenidas = await notas.obtenerListado()
  return notasObtenidas
}

const obtenerPromedioTotal = async() =>{
    const listaNotas =  await notas.obtenerListado()
    let sumaNotas = 0;
    let promedio = 0;
  
    if (listaNotas.length > 0) {
      listaNotas.forEach(element => {
        sumaNotas += element.nota;
      });
      promedio = sumaNotas / listaNotas.length;
    }
  
    return promedio;
}



const cantNotasIngresadas = async () =>{
let notasObtenidas = await notas.obtenerListado()
return notasObtenidas.length
}




const obtenerMinMax = async () => {
const listaNotas = await notas.obtenerListado();

if (listaNotas.length === 0) {
  return null; // Retornar null si no hay notas registradas
}

const { nota: min } = listaNotas.reduce((menorNota, notaActual) => {
  return notaActual.nota < menorNota.nota ? notaActual : menorNota;
});

const { nota: max } = listaNotas.reduce((mayorNota, notaActual) => {
  return notaActual.nota > mayorNota.nota ? notaActual : mayorNota;
});

const resultado = { min, max };
return resultado;
}




export default{
    obtenerListado,
    obtenerPromedioTotal,
    obtenerMinMax,
    cantNotasIngresadas,

}