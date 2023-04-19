
//-------------------------------- Metodos Estaticos: Resolve, Reject ------------------------------------
/*
Promise.resolve(6)
.then(respuesta => respuesta * 2)

.then(respuesta =>{

    if(respuesta > 10) throw  respuesta 

    return respuesta
})

.then(respuesta => console.log('OK',respuesta))

.catch(error => console.log('Error',error))



Promise.reject('bad request')
.then(respuesta => console.log('OK',respuesta))
.catch(error => console.log('Error',error))
*/
//-------------------------------- Metodos Estaticos: race, all ------------------------------------


//Definimos una funcion que devuelva una promesa
const retardo = (ms,mensaje) => new Promise((resolver,reject) => {
        let tipo = typeof ms

        if(tipo == 'number'){
            setTimeout(()=> {resolver(mensaje)},ms)
        }else{
            const error = {
                razon: 'Error en tipo de dato de ms(debe ser number)',
                tipo,
                ms,
                mensaje
            }
            reject(error)
        }
})

// Definimos una metodo que devuelva un mensaje y un horario
const printTime = (mensaje)=> console.log(mensaje,new Date().toLocaleString())

/*
printTime('Inicio retardo')

retardo(2000,'Retardo 2000 ms ok')

.then(respuesta => {

    console.log(respuesta)
    printTime('Fin retardo')

})

*/
//----------------------------- Race ----------------------------------- cuando la promesa mas rapida en resolve gana se termina
/*
printTime('Inicio Carrera')

Promise.race([
    retardo(5000,'Retardo 5000 ms ok'),
    retardo(7000,'Retardo 7000 ms ok'),
    retardo(3000,'Retardo 3000 ms ok'),
])

.then(respuesta => {
    console.log('Gano ',respuesta)
    printTime('Fin carrera')
})

.catch(error => console.log('Error en la carrera',error))
*/

//----------------------------- All---------------------------------------- // cuando todas las promesas se cumplen se termina el metodo
/*
printTime('Inicio Cumplimiento Total')

Promise.all([
    retardo(5000,'Retardo 5000 ms ok'),
    retardo(7000,'Retardo 7000 ms ok'),
    retardo(3000,'Retardo 3000 ms ok'),
])

.then(respuesta => {
    console.log('Cumplio ',respuesta)
    printTime('Fin cumplimiento total')
})

.catch(error => console.log('Error ',error))

.finally(()=> console.log('Fin All')) // siempre el finally se ejecuta aunque la promesa sea resolve o reject

*/
//-----------------------------------------------------------------------------------------------------------------


async function funcion_promise_all(){
    
    try{
        printTime('Inicio Cumplimiento Total')

        let respuesta = await Promise.all([
            retardo(5000,'Retardo 5000 ms ok'),
            retardo(7000,'Retardo 7000 ms ok'),
            retardo(3000,'Retardo 3000 ms ok'),
        ])
        
        
            console.log('Cumplio',respuesta)
            printTime('Fin cumplimiento total')
              
    }
    catch(error){
          console.log('Error',error)
    }
    finally{
       console.log('Fin All')
    }
}

//funcion_promise_all()

//--------------------------------------------------------------------------------------------
//IIFE (Inmediatly Invoked Function Expression) funcion invocada inmeditatmente

;(function(){

//funcion_promise_all()


})()//para que se ejecute

//--------------AllSettled------------------ Devuelve el estado de las promesa devueltas, 'fulfilled' : Cumplida  o 'rejecte' : rechazada

async function funcion_promise_allSettled(){
    
    try{
        printTime('Inicio Cumplimiento Total')

        let respuesta = await Promise.allSettled([
            retardo(5000,'Retardo 5000 ms ok'),
            retardo(7000,'Retardo 7000 ms ok'),
            retardo(3000,'Retardo 3000 ms ok'),
        ])
        
        
            console.log('Cumplio',respuesta)
            printTime('Fin cumplimiento total')
              
    }
    catch(error){
          console.log('Error',error)
    }
    finally{
       console.log('Fin All')
    }
}

funcion_promise_allSettled()