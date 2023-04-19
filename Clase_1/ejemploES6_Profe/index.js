/* -------------------------------------------------------------*/
/*  Comparación entre constructores de variables en JS5 y ES6   */
/* -------------------------------------------------------------*/
var a = 8
var b = 7
var c = a + b

console.log(c)

// ------ JS5 (var) -------
/* var d = 7
var d = 8
console.log(d)

var PI = 3.1415927
PI = 2.7
console.log(PI)

for(var i=0; i<5; i++) {
    console.log(i)
}
console.log(i) */


// ------ ES6 (let - const) -------
let d = 7
//var d = 8  // --> NO!!!!!
console.log(d)

const PI = 3.1415927
//PI = 2.7
console.log(PI)


for(let i=0; i<5; i++) {
    console.log(i)
}
//console.log(i)