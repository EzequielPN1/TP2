
const fs = require('fs')

/*
1-leerArchivoComoString
Recibe la ruta del archivo que se quiere leer, y devuelve un único string con todo el contenido
del mismo.
*/

let textoUno= fs.readFileSync('LeerArchivoComoString.txt', 'utf-8')

console.log('Output 1: ' + textoUno)
console.log("----------------------------------------------------------------------------------------------------")

//----------------------------------------------------------------------------------------------------------------

/*
2-escribirTextoEnArchivo
Recibe una ruta, un texto, y un flag, y graba ese texto en un archivo en la ruta dada. Si el
directorio es válido pero el archivo no existe, decide que hacer según el flag:
● Con el flag en true, crea el archivo y lo escribe.
● Con el flag en false, lanza el error “el archivo no existe”.
*/

function escribirTextoEnArchivo(ruta,text,flag){

    try {
        let textoUno = fs.readFileSync(ruta, 'utf-8')
        console.log('Output 2: ' +textoUno);
      } catch (err) {
         if(flag){
            console.log("Output 2: Creando el archivo....")
            fs.writeFile('ArchivoNuevo', text, (err) => {
                if (err) {
                  console.error('Error al crear el archivo:', err);
                } else {
                  console.log('El archivo se ha creado satisfactoriamente.');
                }
              });
         }else{
            console.error('El archivo no existe');
         }     
      }

}


escribirTextoEnArchivo('rutaNoValida.txt','Soy un Texto Agregado',true)
console.log("----------------------------------------------------------------------------------------------------")





//----------------------------------------------------------------------------------------------------------------
/*
3-transformarStringEnArrayDeNumeros
Recibe un texto y una secuencia de caracteres que usará como separador. Devuelve un array
con todos los números producto de partir el texto cada vez que aparezca la secuencia
separadora. En el caso de que alguna de las partes no sea numérica, no se incluirá en el
resultado, pero no debe lanzar ningún error.
Ejemplo
Input: texto = ‘123 | 456 | 789 | 1bc | 10’ , separador = ‘ | ’
Output: [123, 456, 789, 10]
*/

let textoDos = fs.readFileSync('transformarStringEnArrayDeNumeros.txt', 'utf-8')
let separados  = textoDos.split(' | ')
let numeros = []

separados.forEach(element => {
    let numero = Number(element)

    if(!isNaN(numero)){
        numeros.push(numero)
    }

});

console.log("Output 3:  " + numeros)
console.log("----------------------------------------------------------------------------------------------------")

//----------------------------------------------------------------------------------------------------------------
/*
transformarArrayDeNumerosAUnSoloString
Recibe un array con strings, y una secuencia de caracteres para usar como separador.
Devuelve un único string que es la unión de todos los strings del array, intercalando la
secuencia separadora entre cada uno.
Ejemplo
Input: array = [123, 456, 789, 10] , separador = ‘,’
Output: ‘123,456,789,10’
*/


let arrayString = ["123", "456", "789", "10"]

let unicoString = arrayString.join(",");

console.log("Output 4: " + unicoString)
console.log("----------------------------------------------------------------------------------------------------")

//----------------------------------------------------------------------------------------------------------------
/*
combinarDosArrays
Recibe dos arrays, ambos con datos de tipo numérico, ambos ordenados en forma ascendente,
y sin repetidos dentro de cada archivo (puede haber repetidos entre un archivo y otro).
Devuelve un nuevo array, que contenga todos los datos de ambos arrays, también ordenados
en forma ascendente, y también sin repetidos.
Ejemplo
Input: array1 = [1, 5, 10] , array2 = [2, 3, 8, 11]
Output: [1, 2, 3, 5, 8, 10, 11]
Observación
Si se te ocurrió una solución que requiere poder ordenar un array, pensá en otra forma de
hacerlo.
*/

const array1 = [1, 5, 10]
const array2 = [2, 3, 8, 11]

function sumarDosArray(array1, array2) {
  let resultado = [];
  let indexUno = 0;
  let indexDos = 0;

  while (indexUno < array1.length && indexDos < array2.length) {
  
    if (array1[indexUno] < array2[indexDos]) {
      
      resultado.push(array1[indexUno])

      indexUno++
    } else if (array1[indexUno] > array2[indexDos]) {
      
      resultado.push(array2[indexDos])
      indexDos++
    } else {
      
      resultado.push(array1[indexUno])
      indexUno++ 
      indexDos++
    }
  }

  while (indexUno < array1.length) {
    resultado.push(array1[indexUno]);
    indexUno++
  }


  while (indexDos < array2.length) {
    resultado.push(array2[indexDos])
    indexDos++
  }

  return resultado; 
}

const combinarDosArrays = sumarDosArray(array1,array2)

console.log("Output 5: " + combinarDosArrays)
console.log("----------------------------------------------------------------------------------------------------")
//----------------------------------------------------------------------------------------------------------------

/*
combinarNArrays
Igual que la función anterior, solo que ésta recibe un array de arrays de números ordenados en
forma ascendente y sin repetidos, y devuelve un nuevo array, con la combinación de todos los
números de todos los arrays recibidos, también ordenados en forma ascendente, y también sin
repetidos.
Ejemplo
Input: arrays = [[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]]
Output: [1, 2, 3, 4, 6, 7, 10, 13, 15, 16]
*/
let arraysDeArrays = [[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]]

function reducirArrayDeArrays(array){
    let arrayResultante=[]

    for (let index = 0; index < array.length; index++) {
    let arrayActual = array[index];
    arrayResultante = sumarDosArray(arrayActual,arrayResultante)

}
return arrayResultante
}

const combinarNArrays = reducirArrayDeArrays(arraysDeArrays)

console.log("Output 6: " + combinarNArrays)
console.log("----------------------------------------------------------------------------------------------------")

//----------------------------------------------------------------------------------------------------------------


