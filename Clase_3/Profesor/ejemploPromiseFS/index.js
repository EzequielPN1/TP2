const fs = require('fs')

// 1)
/* let datos = fs.readFileSync('text1.txt', 'utf-8')
console.log(datos)

datos = fs.readFileSync('text2.txt', 'utf-8')
console.log(datos)

datos = fs.readFileSync('text3.txt', 'utf-8')
console.log(datos)

datos = fs.readFileSync('text4.txt', 'utf-8')
console.log(datos) */


// 2)
/* fs.readFile('text1.txt', 'utf-8', (error, datos) => {
    console.log(datos)

    fs.readFile('text2.txt', 'utf-8', (error, datos) => {
        console.log(datos)

        fs.readFile('text3.txt', 'utf-8', (error, datos) => {
            console.log(datos)

            fs.readFile('text4.txt', 'utf-8', (error, datos) => {
                console.log(datos)
            })            
        })
    })
}) */


// 3)
/* function readFileCb(file,cb) {
    fs.readFile(file, 'utf-8', (error, datos) => {
        cb(datos)
    })
}

readFileCb('text1.txt', datos => {
    console.log(datos)

    readFileCb('text2.txt', datos => {
        console.log(datos)

        readFileCb('text3.txt', datos => {
            console.log(datos)

            readFileCb('text4.txt', datos => {
                console.log(datos)
            })            
        })
    })
}) */

// 4)
function readFilePromise(file) {
    return new Promise((resolve,reject) => {
        fs.readFile(file, 'utf-8', (error, datos) => {
            if(error) reject(error)
            else resolve(datos)
        })
    })
}

// ---- con then / catch
/* readFilePromise('text1.txt')
    .then(datos => {
        console.log(datos)
        return readFilePromise('text2.txt')
    })
    .then(datos => {
        console.log(datos)
        return readFilePromise('text3.txt')
    })
    .then(datos => {
        console.log(datos)
        return readFilePromise('text4.txt')
    })    
    .then(datos => {
        console.log(datos)
    })
    .catch(error => console.log(error)) */


// ---- con async / await

const test_fs_sin_promise = async () => {
    try {
        let datos = await readFilePromise('text1.txt')
        console.log(datos)

        datos = await readFilePromise('text2.txt')
        console.log(datos)

        datos = await readFilePromise('text3.txt')
        console.log(datos)

        datos = await readFilePromise('text4.txt')
        console.log(datos)
    }
    catch(error) {
        console.log(error)
    }
}

//test_fs_sin_promise()


const test_fs_con_promise = async () => {
    try {
        let datos = await fs.promises.readFile('text1.txt','utf-8')
        console.log(datos)

        datos = await fs.promises.readFile('text2.txt','utf-8')
        console.log(datos)

        datos = await fs.promises.readFile('text3.txt','utf-8')
        console.log(datos)

        datos = await fs.promises.readFile('text4.txt','utf-8')
        console.log(datos)
    }
    catch(error) {
        console.log(error)
    }
}

test_fs_con_promise()





console.log('------> Otras tareas <-----')
