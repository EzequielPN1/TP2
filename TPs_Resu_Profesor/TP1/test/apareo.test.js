console.log('Trabajo Práctico1 - TP2')

import fileUtils from '../src/utils/fileUtils.js'
import transformUtils from '../src/utils/transformUtils.js'
import apareo from '../src/apareo.js'

// ----------------------------
// leo los 4 archivos a memoria
// ----------------------------
let str1 = fileUtils.leerArchivoComoString('in/10NumerosOrdenadosEntre1y50(setA).in')
let str2 = fileUtils.leerArchivoComoString('in/10NumerosOrdenadosEntre1y50(setB).in')
let str3 = fileUtils.leerArchivoComoString('in/imparesOrdenadosEntre1y999.in')
let str4 = fileUtils.leerArchivoComoString('in/paresOrdenadosEntre2y1000.in')

console.log('----- str1 -----')
console.log(str1)

console.log('----- str2 -----')
console.log(str2)

console.log('----- str3 -----')
console.log(str3)

console.log('----- str4 -----')
console.log(str4)

// preparo los 4 arrays a partir de los archivo leidos
let arr1 = transformUtils.transformarStringEnArrayDeNumeros(str1, ',')
let arr2 = transformUtils.transformarStringEnArrayDeNumeros(str2, ',')
let arr3 = transformUtils.transformarStringEnArrayDeNumeros(str3, ',')
let arr4 = transformUtils.transformarStringEnArrayDeNumeros(str4, ',')

console.log('----- arr1 -----')
console.log(arr1)

console.log('----- arr2 -----')
console.log(arr2)

console.log('----- arr3 -----')
console.log(arr3)

console.log('----- arr4 -----')
console.log(arr4)

// combino los primeros dos arrays
let dosArrC = apareo.combinarDosArrays(arr1,arr2)
console.log('----- dosArrC -----')
console.log(dosArrC)

// combino los cuatro arrays
let cuatroArrC = apareo.combinarNArrays([arr1,arr2,arr3,arr4])
console.log('----- cuatroArrC -----')
console.log(cuatroArrC)

//salvo los datos en archivos out
let sdosArrC = transformUtils.transformarArrayDeNumerosAUnSoloString(dosArrC)
console.log('----- sdosArrC -----')
console.log(sdosArrC)

fileUtils.escribirTextoEnArchivo('out/micomb.out',sdosArrC, true)


let scuatroArrC = transformUtils.transformarArrayDeNumerosAUnSoloString(cuatroArrC)
console.log('----- scuatroArrC -----')
console.log(scuatroArrC)

fileUtils.escribirTextoEnArchivo('out/micomb2.out',scuatroArrC, true)


