const fs = require('fs').promises

fs.readFile('package.json', 'utf-8')
.then( contenido => {
    console.log('package.json: lectura exitosa')

    let info = {}
    info.contenidoStr = contenido,
    info.contenidoObj = JSON.parse(contenido),
    info.size = contenido.length

    console.log(info)

    return fs.writeFile('info.txt', JSON.stringify(info, null,'\t'))
})
.then( () => {
    console.log('info.txt: escritura exitosa')
})
.catch( error => {
    throw new Error(`Error en lectura / escritura: ${error.message}`)
})

process.on('uncaughtException', function(err) {
    console.log(err.message)
    process.exit(1)
})
