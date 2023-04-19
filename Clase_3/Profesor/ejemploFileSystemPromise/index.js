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


/* -------------------------------------------------------------------------------------- */
/*  READ / WRITE FILE SYSTEM FORMA ASINCRÓNICA (NO Bloqueante) con promises nativas de fs */
/* -------------------------------------------------------------------------------------- */
function readWriteFsASyncPromiseThenCatch() {
    fs.promises.readFile('../datos.txt', 'utf-8')
        .then( datos => {
            console.log('Rd ok (ANTES):', datos)
            return fs.promises.writeFile('../datos.txt', new Date().toLocaleString())
        })
        .then(() => {
            console.log('Wr ok')
            return fs.promises.readFile('../datos.txt', 'utf-8')
        })
        .then( datos => {
            console.log('Rd ok (DESPUÉS):', datos)
        })
        .catch( error => {
            console.log(`Error en operación asincrónica de lectura / escritura: ${error.message}`)
        })
}

//readWriteFsASyncPromiseThenCatch()


//async function readWriteFsASyncPromiseAsyncAwait() {
//const readWriteFsASyncPromiseAsyncAwait = async function () {
const readWriteFsASyncPromiseAsyncAwait = async () => {
    try {
        let datos = await fs.promises.readFile('../datos.txt','utf-8')
        console.log('Rd ok (ANTES):', datos)

        await fs.promises.writeFile('../datos.txt', new Date().toLocaleString())
        console.log('Wr ok')

        datos = (await fs.promises.readFile('../datos.txt')).toString()
        console.log('Rd ok (DESPUÉS):', datos)
    }
    catch(err) {
        console.log(`Error en operación asincrónica de lectura / escritura: ${err.message}`)
    }
}

readWriteFsASyncPromiseAsyncAwait()


console.log('----> Otras tareas...')

