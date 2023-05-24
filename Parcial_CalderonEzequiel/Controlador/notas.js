import notas from "../Servicio/notas.js"







const obtenerListado = async (req,res) => {
    try {     
        let listaDeNotas = await notas.obtenerListado()
        res.send(listaDeNotas)
    }
    catch(error) {
        console.log('error obtener Notas', error)
    }
}




const obtenerPromedioTotal = async (req,res) => {
    try {      
        let promedioObtenido = await notas.obtenerPromedioTotal()
        res.send({promedioObtenido})
    }
    catch(error) {
        console.log('error obtenerPromedioTotal', error)
    }
}





const cantNotasIngresadas = async (req,res) => {
    try {     
        let cantNotasIngresadas = await notas.cantNotasIngresadas()
        res.send({cantNotasIngresadas})
    }
    catch(error) {
        console.log('error obtener cantNotasIngresadas', error)
    }
}







const obtenerMinMax = async (req,res) => {
    try {     
        let minMax = await notas.obtenerMinMax()
        res.send({minMax})
    }
    catch(error) {
        console.log('error obtener notaMasBaja', error)
    }
}



export default{

    obtenerListado,
    obtenerPromedioTotal,
    obtenerMinMax,
    cantNotasIngresadas,

  
}