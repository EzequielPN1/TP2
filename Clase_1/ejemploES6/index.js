
var a = 5
var b = 15

var c = a + b
console.log(c)

//----------------------JS5 (var)---------------------------

var d = 7
var d = 8

// no se deberia poder declarar la misma variable
console.log(d)

var PI = 3.1415927
PI = 2.7
console.log(PI)

for(var i = 0;i< 5;i++){
    console.log(i)
}
console.log(i)


//---------------ES6 (let. const)----------------
let e = 7 //con let no se puede redeclarar una variable
console.log(e)

const f = 3 // con cosnt no se puede cambiar el valor de una constante
console.log(f)

for(let g = 0;g< 5;g++){
    console.log(g)
}
//console.log(g)  tira error por que es una variable declarada internamente en el for


console.log('------------------------------------VAR-----------------------------------------------------')

var x= 22
//bloque de codigo funcional
function varTest(){
    var x = 31
    //bloqueo de codigo condicional(loops)
    if(true){
        var x = 71
        console.log(x)
    }
    console.log(x)
}

varTest()
console.log(x)


var y = 8
//bloque de codigo anonimo
{
    var y = 6
    console.log(y)
}
console.log(y)

console.log('------------------------------------LET-----------------------------------------------------')

let o = 22
//bloque de codigo funcional
function varTest(){
    let o = 31
    //bloqueo de codigo condicional(loops)
    if(true){
        let o = 71
        console.log(o)
    }
    console.log(o)
}

varTest()
console.log(o)


let h = 8
//bloque de codigo anonimo
{
    let h = 6
    console.log(h)
}
console.log(h)


console.log('------------------------------------CONST-----------------------------------------------------')

const j = 22
//bloque de codigo funcional
function varTest(){
    const j = 31
    //bloqueo de codigo condicional(loops)
    if(true){
        const j = 71
        console.log(j)
    }
    console.log(j)
}

varTest()
console.log(j)


const k = 8
//bloque de codigo anonimo
{
    const k = 6
    console.log(k)
}
console.log(k)

console.log('-----------------------------------------------------------------------------------------')
//Tippado en JS/ES

var nombre = 'Pepe'  // tipado dinamico, la variable adquiere su tipo en la asigancion
console.log(nombre, typeof nombre)
var nombre = 'Pepe'  // tipado dinamico, la variable adquiere su tipo en la asigancion
nombre = 123  // debil
console.log(nombre, typeof nombre) // el typeof muestra el tipo de variable

//-----------------------------------JS5--------------------------

function sumar(a,b){
return a + b
}

var n1 = 17,n2 = 5

//concatenacion de strings 
console.log('La suma de ' + n1 + ' mas ' + n2 + ' es ' + sumar(n1,n2))



//------------------------------ES6 ( arrow function, funciones flechas o expresiones lambda)-------------------------------------------------------


    var n3 = 17,n4 = 5

    const sumar2 = (c,d) =>{   // uso de la funcion fecha
        return c + d
        }
    console.log(`La suma de ${n3}  mas ${n4} es ${sumar(n3,n4)}`)  //template de strings  `` backtic


    const sumar3 = (c,d) => c+d // abreviatura de la funcion flecha
    console.log(`La suma de ${n3}  mas ${n4} es ${sumar(n3,n4)}`)


    const dobleDe = (c) => 2 * c
    console.log(`El doble de  ${n3}   es ${dobleDe(n3)}`)


    const toUpper = str => str.toUpperCase()
    console.log(toUpper('Hola'))


    const toUpperValidado = str => {
        if(typeof str != 'string') return 'Error en un tipo de dato de entrada (debe ser un string)'
        return str.toUpperCase()
    }
    console.log(toUpperValidado(123))
    console.log(toUpperValidado('Hola'))

     const toUpperTryCatch = str =>{
        let sal=''
        try{
              sal = str.toUpperCase()
        }catch(err){
               console.log(`Error en conversion en mayuscula: ${err.message} `)
        }
        return sal
     }
    console.log(toUpperTryCatch('Chau'))
    console.log(toUpperTryCatch(345))

     const mayorDeEdad = edad => edad >= 18? 'Si' : 'No'
     console.log(mayorDeEdad(17))
     console.log(mayorDeEdad(18))


     const getPersona = () => {
        return { nombre:'Juan', edad:23 }
     }
     console.log(getPersona())

     const getPersona2 = _ => {
        return { nombre:'Juan', edad:23 }
     }
     console.log(getPersona())



    //-------------------------------------------------------------------------------------------------------
    //                            Funcionamiento del this en JS5 Y ES6
    //-------------------------------------------------------------------------------------------------------

    //JS5 y this
    function Timer(cont){
        console.log(this)

        //atributos
        this.contador = cont

    }

    //Los metodos: van afuera
    Timer.prototype.getContador = function(){
        return this.contador
    }

    Timer.prototype.setTimer = function(ms){
        var that = this  //parche
        //setInterval(function(){console.log(this.contador++) },ms) // se pierde el this
        setInterval(function(){console.log(that.contador++) },ms) // parche
    }

    Timer.prototype.setTimer2 = function(ms){
        setInterval(() => {console.log(this.contador++) },ms) // solucion con la funcion lambda para usar el this
    }


   const timer1 =  new Timer(50)
   const timer2 =  new Timer(150)

   console.log(timer1.contador)
   console.log(timer2.contador)

 //  timer1.setTimer(1000)
 //  timer2.setTimer(3000)

 //  timer1.setTimer2(1000)
 //  timer2.setTimer2(3000)


//ES6 y this

class Timer2{
 
    constructor(cont){
        this.contador=cont
    }
    getContador(){
       return this.contador
    }
    setTimer3(ms){
        setInterval(() => {console.log(this.contador++) },ms)
    }
}

const timer3 =  new Timer2(50)
const timer4 =  new Timer2(150)

console.log(timer3.contador)
console.log(timer4.contador)

//timer3.setTimer3(1000)
//timer4.setTimer3(1000)




