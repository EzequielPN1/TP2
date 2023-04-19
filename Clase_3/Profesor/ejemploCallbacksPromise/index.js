//------------------------------------------------
//          setTimeout , setInterval
//------------------------------------------------
//console.log('Inicio delay', new Date().toLocaleString() )
//setTimeout(() => console.log('Fin delay', new Date().toLocaleString() ), 2000)

//console.log('Inicio Timer', new Date().toLocaleString() )
//setInterval(() => console.log('Timer', new Date().toLocaleString() ), 2000)


//------------------------------------------------
//     Callbacks: funciones como parámetros
//------------------------------------------------

const pow = (b,e) => b ** e //Math.pow(b,e)
//console.log(pow(2,3))

const operacion_cb = (a,b,cb) => cb(a,b)
//console.log(operacion_cb(2,3,pow))


// -----> callback sincrónico
const operacion_pow_cb_sync = (a,b,cb) => {
    cb(operacion_cb(a,b,pow))
}

// -----> callback asincrónico
const operacion_pow_cb_async = (a,b,cb) => {
    setTimeout( () => cb(operacion_cb(a,b,pow)), 1000)
    //cb(operacion_cb(a,b,pow))
}

// -------------------------------------------------
//        Ejecución de tareas sincrónicas
// -------------------------------------------------
/* let res = operacion_cb(2,2,pow)
console.log(res)

res = operacion_cb(res,2,pow)
console.log(res)

res = operacion_cb(res,2,pow)
console.log(res) */


// ------------------------------------------------------------
//        Ejecución de tareas sincrónicas (con callbacks)
// ------------------------------------------------------------
/* operacion_pow_cb_sync(2,2, res => {
    console.log(res)

    operacion_pow_cb_sync(res,2, res => {
        console.log(res)

        operacion_pow_cb_sync(res,2, res => {
            console.log(res)
        })        
    })    
}) */


// ------------------------------------------------------------
//        Ejecución de tareas asincrónicas (con callbacks)
// ------------------------------------------------------------

function operaciones_cb() {
    // CALLBACK HELL ó INFIERNO DE CALLBACKS ó PIRÁMIDE DE LA PERDICIÓN
    operacion_pow_cb_async(2,2, res => {
        console.log(res)

        operacion_pow_cb_async(res,2, res => {
            console.log(res)

            operacion_pow_cb_async(res,2, res => {
                console.log(res)

                operacion_pow_cb_async(res,2, res => {
                    console.log(res)

                    operacion_pow_cb_async(res,2, res => {
                        console.log(res)

                        operacion_pow_cb_async(res,2, res => {
                            console.log(res)

                            operacion_pow_cb_async(res,2, res => {
                                console.log(res)

                                operacion_pow_cb_async(res,2, res => {
                                    console.log(res)
                                })        
                            })        
                        })        
                    })        
                })        
            })        
        })    
    })
}

//operaciones_cb()


// ------------------------------------------------------------------
//   Resolución del problema de los callbacks (HELL) con Promesas
// ------------------------------------------------------------------
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises

// -----> callback asincrónico
const operacion_pow_promise = (a,b) => {
    return new Promise((resolve,reject) => {
        //resolve()   // cuando la promesa se cumplió
        //reject()   // cuando la promesa NO se cumplió
        const aType = typeof a
        const bType = typeof b

        if(aType == 'number' && bType == 'number') {
            setTimeout( () => resolve(operacion_cb(a,b,pow)), 1000)
        }
        else {
            const error = {
                razon: 'Alguno de los parámetros de entrada no es un número',
                aType, // es igual a -> aType : aType
                bType,
                a,
                b
            }
            reject(error)
        }
    })
}

// --------------------------------------------------------------------------------
//        Ejecución de tareas asincrónicas con promesas (interfaz then/catch)
// --------------------------------------------------------------------------------
function operaciones_promise_then_catch() {
    
    operacion_pow_promise(2,2)
        .then( res => {
            console.log(res)
            return operacion_pow_promise(res,2)
        })
        .then(res => {
            console.log(res)
            return operacion_pow_promise(res,2)
        })
        .then(res => {
            console.log(res)
            return operacion_pow_promise(res,2)
        })
        .then(res => {
            console.log(res)
            return operacion_pow_promise(res,2)
        })
        .then(res => {
            console.log(res)
            return operacion_pow_promise(res,2)
        })
        .then(res => {
            console.log(res)
            return operacion_pow_promise(res,2)
        })
        .then(res => {
            console.log(res)
            return operacion_pow_promise(res,2)
        })
        .then(res => {
            console.log(res)
        })                                
        .catch( error => console.log('ERROR:', error) )
}

//operaciones_promise_then_catch()


// --------------------------------------------------------------------------------
//        Ejecución de tareas asincrónicas con promesas (interfaz async/await)
// --------------------------------------------------------------------------------
async function operaciones_promise_async_await() {
    
    try {
        for(let n=0, res = 2; n<8; n++) {
            res = await operacion_pow_promise(res,2)
            //res = await operacion_pow_promise(n==4?true:res,2)    // para dar error
            console.log(res) 
        }


        /* let res = await operacion_pow_promise(2,2)
        console.log(res)

        res = await operacion_pow_promise(res,2)
        console.log(res)

        res = await operacion_pow_promise(res,2)
        console.log(res)

        res = await operacion_pow_promise(res,2)
        console.log(res)

        res = await operacion_pow_promise(res,2)
        console.log(res)

        res = await operacion_pow_promise(res,2)
        console.log(res)

        res = await operacion_pow_promise(res,2)
        console.log(res)

        res = await operacion_pow_promise(res,2)
        console.log(res) */
    }
    catch(error) {
        console.log('ERROR:', error)
    }
}

operaciones_promise_async_await()


console.log('-----> Otras tareas <-----')

//setInterval(() => console.log('Otras tarea programada', new Date().toLocaleString() ), 2500)