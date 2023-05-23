/**
 * toma dos arrays de números ordenados y en forma eficiente los combina en uno solo, aún ordenado
 * @param {number[]} arrA un array de números ordenados
 * @param {number[]} arrB otro array de números ordenados
 * @returns {number[]} un nuevo array de números ordenados
 */
function combinarDosArrays(arrA, arrB) {
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Set
    return Array.from(new Set(arrA.concat(arrB).sort((a,b) => a-b)))
}

/**
 * toma un array de muchos arrays de números ordenados y los combina en uno solo, aún ordenado
 * @param {number[][]} arrs el array de arrays de números que quiero combinar
 * @returns {nuber[]} el nuevo array de números ordenados
 */
function combinarNArrays(arrs) {
    let arrOut = []

    for(let arr of arrs){
        arrOut = arrOut.concat(arr)
        //console.log(arrOut)
    }
    //console.log(arrOut)

    return Array.from(new Set(arrOut.sort((a,b) => a-b)))
}

// exportar ambas funciones
export default {
    combinarDosArrays,
    combinarNArrays
}