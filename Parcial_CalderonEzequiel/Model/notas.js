const listaNotas =[{nota:9},{nota:10},{nota:5}]

  const obtenerListado = async () => {
    try {
    return listaNotas
    }catch(error) {
      console.log('error en obtener notas', error)
      return []
  }
}


  export default {
    obtenerListado,
    
  }




