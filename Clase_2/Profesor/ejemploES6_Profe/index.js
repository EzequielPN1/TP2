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

console.log('------------------ VAR ----------------------')

/* var x = 22

//bloque de código funcional
function varTest() {
    var x = 31
    //bloque de código condicional (loops)
    if(true) {
        var x = 71
        console.log(x)
    }
    console.log(x)
}
varTest()
console.log(x)


var y = 8
//bloque de código anónimo
{
    var y = 6
    console.log(y)
}
console.log(y) */



console.log('------------------ LET ----------------------')

/* let x = 22

//bloque de código funcional
function letTest() {
    let x = 31
    //bloque de código condicional (loops)
    if(true) {
        let x = 71
        console.log(x)
    }
    console.log(x)
}
letTest()
console.log(x)


let y = 8
//bloque de código anónimo
{
    let y = 6
    console.log(y)
}
console.log(y) */



console.log('------------------ CONST ----------------------')

const x = 22

//bloque de código funcional
function constTest() {
    const x = 31
    //bloque de código condicional (loops)
    if(true) {
        const x = 71
        console.log(x)
    }
    console.log(x)
}
constTest()
console.log(x)


const y = 8
//bloque de código anónimo
{
    const y = 6
    console.log(y)
}
console.log(y)


console.log('-----------------------------')

// Tipado en JS/ES
var nombre = 'Pepe'     // dinámico
console.log(nombre, typeof nombre)
nombre = 123            // débil
console.log(nombre, typeof nombre)


/* -------------------------------------------------------------*/
/*  Comparación entre constructores de funciones en JS5 y ES6   */
/* -------------------------------------------------------------*/

// ------ JS5 -------
/* function sumar(a,b) {
    return a + b
} */

/* var sumar = function(a,b) {
    return a + b
}

//sumar = true
console.log(typeof sumar)

var n1 = 17, n2 = 5

// concatenación de strings
console.log('La suma de ' + n1 + ' más ' + n2 + ' es ' + sumar(n1,n2)) */


// ----- ES6 ( arrow function, funciones flecha ó expresiones lambda )

const sumar = (a,b) => a + b
//sumar = true

const dobleDe = a => 2*a
//const toUpper = str => str.toUpperCase()
/* const toUpper = str => {
    if(typeof str != 'string') return 'Error en tipo de dato de entrada (debe ser un string)'
    return str.toUpperCase() 
} */
const toUpper = str => {
    let sal = ''
    try {
        sal = str.toUpperCase() 
    }
    catch(err) {
        console.log(`Error en conversión a mayúscula: ${err.message}`)
    }

    return sal
}

const mayorDeEdad = edad => edad>=18? 'Si':'No'

//const getPersona = () => {
const getPersona = _ => ({ nombre: 'Juan', edad: 23 })

// ------------------------------------------------------

console.log(typeof sumar)

let n1 = 17, n2 = 5

// concatenación de strings
//console.log('La suma de ' + n1 + ' más ' + n2 + ' es ' + sumar(n1,n2))

// template strings `` backtic
console.log(`La suma de ${n1} más ${n2} es ${sumar(n1,n2)}`)
console.log(`El doble de ${n1} es ${dobleDe(n1)}`)

console.log( toUpper('Hola') )
console.log( toUpper(123) )

console.log( mayorDeEdad(17) )
console.log( mayorDeEdad(34) )

console.log( getPersona() )


/* -------------------------------------------------------------*/
/*            Funcionamiento de this en JS5 y ES6               */
/* -------------------------------------------------------------*/

/*
// ----  JS5 y this ----
function Timer(cont) {
    //var Timer = function(cont) {
    //var Timer = cont => {         // no funciona con arrow function
    //console.log(this)
    //atributos
    this.contador = cont
}
//métodos
Timer.prototype.getContador = function() {
    return this.contador
}

Timer.prototype.setTimer = function(ms) {
    //setInterval( function() { console.log(this.contador++) }, ms ) // "se pierde" el this

    //var that = this         // parche
    //setInterval( function() { console.log(that.contador++) }, ms )  // parche

    setInterval( () => { console.log(++this.contador) }, ms )
}


const timer1 = new Timer(50)
const timer2 = new Timer(150)
const timer3 = new Timer(1500)

console.log( timer1.getContador() )
console.log( timer2.getContador() )
console.log( timer3.getContador() )

timer1.setTimer(1000)
timer2.setTimer(3000)
timer3.setTimer(10000)
*/

// ----  ES6 y this ----
class Timer {
    contador = 0

    constructor(cont) {
        //atributos
        this.contador = cont
    }

    //métodos
    getContador() {
        return this.contador
    }

    setTimer(ms) {
        //setInterval( function() { console.log(this.contador++) }, ms ) // "se pierde" el this

        //var that = this         // parche
        //setInterval( function() { console.log(that.contador++) }, ms )  // parche

        setInterval( () => { console.log(++this.contador) }, ms )
    }
}


const timer1 = new Timer(50)
const timer2 = new Timer(150)
const timer3 = new Timer(1500)

console.log( timer1.getContador() )
console.log( timer2.getContador() )
console.log( timer3.getContador() )

timer1.setTimer(1000)
timer2.setTimer(3000)
timer3.setTimer(10000)

    