const operaciones = require('./api/operaciones')

console.log('Inicio de los calculos...')

console.log(operaciones.suma(10,3))
console.log(operaciones.resta(10,3))
console.log(operaciones.mult(10,3))
console.log(operaciones.div(10,3))

console.log('Fin de los calculos')