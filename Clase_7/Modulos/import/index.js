//import operaciones from './api/operaciones.js' //Forma 1
import * as operaciones from  './api/operaciones.js' //Forma 2
import {suma,resta,mult,div}  from  './api/operaciones.js' //Forma 3

console.log('Inicio de los calculos...')

//Forma 1 -- Forma 2
console.log(operaciones.suma(10,3))
console.log(operaciones.resta(10,3))
console.log(operaciones.mult(10,3))
console.log(operaciones.div(10,3))


//Forma 3 

console.log(suma(10,3))
console.log(resta(10,3))
console.log(mult(10,3))
console.log(div(10,3))


console.log('Fin de los calculos')

