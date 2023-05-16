import notas from "../Model/notas.js"

const guardarNota = async (nombre,nota,curso) => {
    const notaGuardada = await notas.guardarNota(nombre,nota,curso)
    return notaGuardada
    }


const obtenerListadoTotal = async () => { 
    let notasObtenidas = await notas.obtenerListadoTotal()
    return notasObtenidas
}

const obtenerPromedioTotal = async() =>{
      const listaNotas =  await notas.obtenerListadoTotal()
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

const promedioNotasPorCurso = async () => {
  const listaNotas = await notas.obtenerListadoTotal();
  const cursos = ["1A", "2A", "3A"];

  const promediosPorCursos = cursos.reduce((promedios, curso) => {
    const notasCurso = listaNotas.filter(element => element.curso === curso);
    const sumaNotas = notasCurso.reduce((suma, element) => suma + element.nota, 0);
    const promedio = notasCurso.length > 0 ? sumaNotas / notasCurso.length : 0;
    return { ...promedios, [`promCurso${curso}`]: promedio };
  }, {});

  return promediosPorCursos;
}



const cantNotasIngresadas = async () =>{
  let notasObtenidas = await notas.obtenerListadoTotal()
  return notasObtenidas.length
}

const cantidadNotasPorCurso = async () => {
  const listaNotas = await notas.obtenerListadoTotal();
  const cursos = ["1A", "2A", "3A"];

  const cantidadNotasPorCursos = cursos.reduce((cantidades, curso) => {
    const notasCurso = listaNotas.filter(element => element.curso === curso);
    const cantidad = notasCurso.length;
    return { ...cantidades, [`cantCurso${curso}`]: cantidad };
  }, {});

  return cantidadNotasPorCursos;
  
}


const obtenerNotaMasBaja = async () => {
  const listaNotas = await notas.obtenerListadoTotal();
  
  if (listaNotas.length === 0) {
    return null; // Retornar null si no hay notas registradas
  }

  const { nota, alumno } = listaNotas.reduce((menorNota, notaActual) => {
    return notaActual.nota < menorNota.nota ? notaActual : menorNota;
  });

  const resultado = { nota, alumno };
  return resultado;
}




const obtenerNotaMasAlta = async () => {
  const listaNotas = await notas.obtenerListadoTotal();
  
  if (listaNotas.length === 0) {
    return null; // Retornar null si no hay notas registradas
  }

  const { nota, alumno } = listaNotas.reduce((mayorNota, notaActual) => {
    return notaActual.nota > mayorNota.nota ? notaActual : mayorNota;
  });

  const resultado = { nota, alumno };
  return resultado;
}




export default{
    obtenerListadoTotal,
    guardarNota,
    obtenerPromedioTotal,
    promedioNotasPorCurso,
    cantNotasIngresadas,
    cantidadNotasPorCurso,
    obtenerNotaMasBaja,
    obtenerNotaMasAlta
}