const fs = require('fs')

process.on('uncaughtException', function(err) {
    console.log(err.message)
    process.exit(1)
})

try {
    const contenido = fs.readFileSync('package.json', 'utf-8')
    console.log('package.json: lectura exitosa')

    let info = {}
    info.contenidoStr = contenido,
    info.contenidoObj = JSON.parse(contenido),
    info.size = contenido.length

    console.log(info)

    fs.writeFileSync('info.txt', JSON.stringify(info, null,'\t'))
    console.log('info.txt: escritura exitosa')
}
catch(error) {
    throw new Error(`Error en lectura / escritura: ${error.message}`)
}

