/* ------------------------------------------------ */
/*        Métodos estáticos: resolve, reject        */
/* ------------------------------------------------ */
//Promise.reject('bad request')
/* Promise.resolve(6)
    .then( rta => rta * 2)
    .then( rta => {
        if(rta != 12) throw rta
        return rta
    })
    .then(rta => console.log('ok', rta))
    .catch(error => console.log('error', error)) */


/* ------------------------------------------------ */
/*          Métodos estáticos: race, all            */
/* ------------------------------------------------ */
const retardo = (ms, mensaje) => new Promise((resolve,reject) => {
    let tipo = typeof ms

    if(tipo == 'number') {
        setTimeout(() => {
            resolve(mensaje)
        },ms)
    }
    else {
        const error = {
            razon : 'Error en tipo de dato de ms (debe ser number)',
            tipo,
            ms,
            mensaje
        }

        reject(error)
    }
})

const prtTime = mensaje => console.log(mensaje, new Date().toLocaleString())

// test
/* prtTime('Inicio retardo')
retardo(2000, 'Retardo 2000mS ok')
    .then(rta => {
        console.log(rta)
        prtTime('Fin retardo')
    }) */


// --------------- RACE ------------------
/* prtTime('Inicio carrera')

Promise.race([
    retardo(15000, 'Retardo 15000mS ok'),
    retardo(7000, 'Retardo 7000mS ok'),
    retardo(13000, 'Retardo 13000mS ok'),
])
.then( rta => {
    console.log('Ganó', rta)
    prtTime('Fin carrera')
})
.catch( error => console.log('Error en carrera', error)) */


// --------------- ALL ------------------
/* prtTime('Inicio cumplimiento total')

Promise.all([
    retardo(15000, 'Retardo 15000mS ok'),
    retardo(17000, 'Retardo 17000mS ok'),
    retardo(13000, 'Retardo 13000mS ok'),
])
.then( rta => {
    console.log('Cumplió', rta)
    prtTime('Fin cumplimiento total')
})
.catch( error => console.log('Error en cumplimiento total', error))
.finally( () => console.log('Fin all')) */

// --------------------------------------------
//IIFE (Immediatly Invoked Function Expression)
// --------------------------------------------
;(async function() {
    try {
        prtTime('Inicio cumplimiento total')
        
        let rta = await Promise.all([
        //let rta = await Promise.allSettled([
            retardo(15000, 'Retardo 15000mS ok'),
            retardo(17000, 'Retardo 17000mS ok'),
            retardo(13000, 'Retardo 13000mS ok'),
        ])
        console.log('Cumplió', rta)
        prtTime('Fin cumplimiento total')
    }
    catch(error) {
        console.log('Error en cumplimiento total', error)    
    }
    finally {
        console.log('Fin all')
    }
})()

