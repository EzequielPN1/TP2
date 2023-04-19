const fs = require('fs')

console.log('----> Inicio del programa')


/* ----------------------------------------------------------- */
/*    READ / WRITE FILE SYSTEM FORMA SINCRÓNICA (Bloqueante)   */
/* ----------------------------------------------------------- */
function readWriteFsSync() {

    try {
        let datos = fs.readFileSync('../datos.txt','utf-8')
        console.log('Rd ok (ANTES):', datos)

        fs.writeFileSync('../datos.txt', new Date().toLocaleString())
        console.log('Wr ok')

        datos = fs.readFileSync('../datos.txt','utf-8')
        console.log('Rd ok (DESPUÉS):', datos)
    }
    catch(err) {
        console.log(`Error en operación sincrónica de lectura / escritura: ${err.message}`)
    }
}

//readWriteFsSync()


/* ---------------------------- */
/*          CALLBACKS           */
/* ---------------------------- */
function operacion(a,b,cb) {
    return cb(a,b)
}

const suma = (a,b) => a + b
const resta = (a,b) => a - b
const mult = (a,b) => a * b
const div = (a,b) => a / b
//const mod = (a,b) => a % b

const n1 = 6, n2 = 4


/* console.log( operacion(n1,n2,suma) )
console.log( operacion(n1,n2,resta) )
console.log( operacion(n1,n2,mult) )
console.log( operacion(n1,n2,div) )
//console.log( operacion(n1,n2,mod) )
console.log( operacion(n1,n2,(a,b) => a % b) ) */


//setInterval(() => console.log(Date.now()), 1000)
//setTimeout(() => console.log(Date.now()), 1000)


/* ----------------------------------------------------------- */
/*  READ / WRITE FILE SYSTEM FORMA ASINCRÓNICA (NO Bloqueante) */
/* ----------------------------------------------------------- */
function readWriteFsASync(id) {

    fs.readFile('../datos.txt','utf-8',(error, datos) => {
        if(error) throw Error(`Error en operación asincrónica de lectura: ${error.message}`)
        console.log('Rd ok (ANTES):', datos)

        fs.writeFile('../datos.txt', new Date().toLocaleString(), error => {
            if(error) throw Error(`Error en operación asincrónica de escritura: ${error.message}`)
            console.log('Wr ok')

            fs.readFile('../datos.txt','utf-8',(error, datos) => {
                if(error) throw Error(`Error en operación asincrónica de lectura: ${error.message}`)
                console.log('Rd ok (DESPUÉS):', datos, id)
            })
        })
    })

}

readWriteFsASync(777)



console.log('----> Otras tareas...')

