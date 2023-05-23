import fs from 'fs'
/**
 * lee y devuelve el contenido de un archivo como texto en 'utf-8'
 * @param {string} ruta relativa al directorio del proyecto
 * @return {string} el texto leído
 */
/* 
function leerArchivoComoString(ruta) {
    return fs.readFileSync(ruta,'utf-8')
}
*/
function leerArchivoComoString(ruta) {
    try {
        return fs.readFileSync(ruta,'utf-8')
    }
    catch(error) {
        console.log('ERROR leerArchivoComoString', error)
    }
}

/**
 * escribe el texto en el archivo de la ruta, sólo si tal archivo existe. sino, lanza error.
 * @param {string} ruta relativa al directorio del proyecto
 * @param {string} texto 
 */
/*
function escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists) {
    fs.writeFileSync(ruta, texto)
}
*/
function escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists) {
    /*
        Recibe una ruta, un texto, y un flag, y graba ese texto en un archivo en la ruta dada. Si el directorio es válido pero el archivo no existe, decide que hacer según el flag: ● Con el flag en true, crea el archivo y lo escribe. ● Con el flag en false, lanza el error “el archivo no existe”. 
    */

    try {
        let dir = ruta.substr(0,ruta.lastIndexOf('/'))
        let file = ruta.substr(ruta.lastIndexOf('/')).split('/')[1]

        //console.log(dir)
        //console.log(file)
        let lista = fs.readdirSync(dir)
        //console.log(lista)

        //el archivo NO existe
        if(!lista.includes(file)) {
            if(shouldCreateIfNotExists) {
                fs.writeFileSync(ruta, texto)
            }
            else console.log('El archivo '+file+' no existe')
        }
        //el archivo existe
        else {
            fs.writeFileSync(ruta, texto)
        }
    }
    catch(error) {
        console.log('ERROR escribirTextoEnArchivo', error)
    }
}

// exportar ambas funciones
export default {
    leerArchivoComoString,
    escribirTextoEnArchivo
}