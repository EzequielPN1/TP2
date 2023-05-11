//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import

//import operaciones from './api/operaciones.js'  // (1)
//import * as operaciones from './api/operaciones.js'  // (2)
import { suma, resta, mult, div } from './api/operaciones.js'  // (3)

console.log('Inicio de los cálculos...')

/*
// (1)(2)
console.log( operaciones.suma(10,3) )
console.log( operaciones.resta(10,3) )
console.log( operaciones.mult(10,3) )
console.log( operaciones.div(10,3) )
*/

// (3)
console.log( suma(10,3) )
console.log( resta(10,3) )
console.log( mult(10,3) )
console.log( div(10,3) )

console.log('Fin de los cálculos!')
