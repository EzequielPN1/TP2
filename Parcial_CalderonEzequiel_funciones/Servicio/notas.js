import ModelFactory from "../Model/notasFactoy.js"
import config from '../config.js'

class Servicio {

  constructor() {
    this.model = ModelFactory.get(config.MODO_PERSISTENCIA)
  }
  guardarNota = async nota => {
    const notaGuardada = await this.model.guardarNota(nota)
    return notaGuardada
  }


  obtenerListado = async () => {
    let notasObtenidas = await this.model.obtenerListado()
    return notasObtenidas
  }

  obtenerPromedioTotal = async () => {
    const listaNotas = await this.model.obtenerListado()
    let sumaNotas = 0;
    let promedio = 0;


    if (listaNotas.length > 0) {
      listaNotas.forEach(element => {
        sumaNotas += element;
      });
      promedio = sumaNotas / listaNotas.length;
    }

    return promedio;
  }



  cantNotasIngresadas = async () => {
    let notasObtenidas = await this.model.obtenerListado()
    return notasObtenidas.length
  }




  obtenerNotaMax = async () => {
    let notasListadas = await this.model.obtenerListado()
    const nota = notasListadas.reduce((mayorNota, notaActual) => {
      return notaActual > mayorNota ? notaActual : mayorNota;
    });
    return nota
  }

  obtenerNotaMin = async () => {
    let notasListadas = await this.model.obtenerListado()
    const nota = notasListadas.reduce((menorNota, notaActual) => {
      return notaActual < menorNota ? notaActual : menorNota;
    });
    return nota
  }



}





export default Servicio