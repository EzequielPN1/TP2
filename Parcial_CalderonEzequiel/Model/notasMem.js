
class Model {

  constructor() {
    this.listaNotasJson = [];
  }


  guardarNota = async (nota) => {
    this.listaNotasJson.push(JSON.stringify(nota));
    return nota;
  };




  obtenerListado = async () => {
    try {
      const valores = [];

      this.listaNotasJson.forEach(notaJson => {
        try {
          const nota = JSON.parse(notaJson);
          valores.push(nota.nota);
        } catch (error) {
          console.log('Error al analizar la cadena JSON:', error);
        }
      });

      return valores;
    } catch (error) {
      console.log('Error al obtener las notas:', error);
      return [];
    }
  };


}

export default Model




