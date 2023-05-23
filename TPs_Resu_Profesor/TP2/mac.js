const fs = require('fs')

fs.readFile('package.json', 'utf-8', (error, contenido) => {
    if(error) throw new Error(`Error en lectura: ${error.message}`)
    console.log('package.json: lectura exitosa')

    let info = {}
    info.contenidoStr = contenido,
    info.contenidoObj = JSON.parse(contenido),
    info.size = contenido.length

    console.log(info)

    fs.writeFile('info.txt', JSON.stringify(info, null,'\t'), error => {
        if(error) throw new Error(`Error en escritura: ${error.message}`)
        console.log('info.txt: escritura exitosa')
    })
})

process.on('uncaughtException', function(err) {
    console.log(err.message)
    process.exit(1)
})
