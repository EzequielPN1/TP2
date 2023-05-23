const fs = require('fs').promises

;( async () => {
    try {
        let contenido = await fs.readFile('package.json', 'utf-8')
        console.log('package.json: lectura exitosa')
        
        let info = {}
        info.contenidoStr = contenido,
        info.contenidoObj = JSON.parse(contenido),
        info.size = contenido.length

        console.log(info)
        
        await fs.writeFile('info.txt', JSON.stringify(info, null,'\t'))
        console.log('info.txt: escritura exitosa')
    }
    catch(error) {
        throw new Error(`Error en lectura / escritura: ${error.message}`)
    }
})()


process.on('uncaughtException', function(err) {
    console.log(err.message)
    process.exit(1)
})
