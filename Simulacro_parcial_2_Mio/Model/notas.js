
const listaNotas =[]



const guardarNota = async (nom,not,cur) => {
  try {
    const nuevoId = (listaNotas[listaNotas.length - 1]?.id || 0) + 1;
  
    let item = {
      id: nuevoId,
      nombre:nom,
      nota:not,
      curso:cur
    };

    listaNotas.push(item);
      
    console.log(item)
      return item;

   } catch(error) {
      console.log('error en guardar nota:',error)
      let item = {}
      return item;
  }
  }


  const obtenerListadoTotal = async () => {
    try {
    return listaNotas
    }catch(error) {
      console.log('error en obtener notas', error)
      return []
  }
}


  export default {
    guardarNota,
    obtenerListadoTotal,
    
  }




