/**
 * separa el string ante cada ocurrencia del separador, y agrega al array resultado siempre que pueda
 * transformar al fragmento de string en numero.
 * @param {string} str 
 * @param {string} separador
 * @returns {number[]} array de numeros
 */
function transformarStringEnArrayDeNumeros(str, separador) {
    let arrIn = str.split(separador)
    let arrOut = []

    for(let num of arrIn) {
        if(!isNaN(num)) {
            arrOut.push(parseInt(num))
        }
    }
    return arrOut
}

/**
 * concatena todos los numeros entre sí, intercalando un separador entre número y número.
 * @param {number[]} arr 
 * @param {string} separador 
 * @returns {string} el nuevo string
 */
function transformarArrayDeNumerosAUnSoloString(arr, separador) {
    return arr.join(separador)
}

// exportar ambas funciones
export default {
    transformarStringEnArrayDeNumeros,
    transformarArrayDeNumerosAUnSoloString  
}