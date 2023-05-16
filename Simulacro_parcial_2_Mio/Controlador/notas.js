import notas from "../Servicio/notas.js"

const guardarNota = async (req,res) => {
    try {
        let nombre = req.body.nombre
        let nota = req.body.nota
        let curso = req.body.curso

        let notaGuardada = await notas.guardarNota(nombre,nota,curso)
       
        res.json(notaGuardada)
    }
    catch(error) {
        console.log('error guardar Nota', error)
    }
}



const obtenerListadoTotal = async (req,res) => {
    try {     
        let listaDeNotas = await notas.obtenerListadoTotal()
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


const promedioNotasPorCurso = async (req,res) => {
    try {      
        let promedioObtenidoPorCurso = await notas.promedioNotasPorCurso()
        res.send({promedioObtenidoPorCurso})
    }
    catch(error) {
        console.log('error obtenerPromedioTotalPorCurso', error)
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




const cantidadNotasPorCurso = async (req,res) => {
    try {     
        let cantidadNotasPorCurso = await notas.cantidadNotasPorCurso()
        res.send({cantidadNotasPorCurso})
    }
    catch(error) {
        console.log('error obtener cantidadNotasPorCurso', error)
    }
}


const obtenerNotaMasBaja = async (req,res) => {
    try {     
        let notaMasBaja = await notas.obtenerNotaMasBaja()
        res.send({notaMasBaja})
    }
    catch(error) {
        console.log('error obtener notaMasBaja', error)
    }
}


const obtenerNotaMasAlta  = async (req,res) => {
    try {     
        let notaMasAlta = await notas.obtenerNotaMasAlta()
        res.send({notaMasAlta})
    }
    catch(error) {
        console.log('error obtener notaMasAlta', error)
    }
}


export default{
    guardarNota,
    obtenerListadoTotal,
    obtenerPromedioTotal,
    promedioNotasPorCurso,
    cantNotasIngresadas,
    cantidadNotasPorCurso,
    obtenerNotaMasBaja,
    obtenerNotaMasAlta 
}