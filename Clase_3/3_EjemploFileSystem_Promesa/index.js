
console.log('------> Inicio del programa')

const fs = require('fs')


//--------------------------------------------------------

//setInterval(() => console.log(Date.now()),1000) // EJECUTA LA FUNCION POR INTERVALO DE TIEMPO
//setTimeout(() => console.log(Date.now()),1000)  //EJECUTA LA FUNCION DE FORMA DEMORADA


//-------------Lectura y escritura de FileSistem forma Asincronica (NO Bloqueante)--------------------------------------------------


function readWriteFsASync(){ // anidamiento de los callbacks ( CALL BACKS HELL)

    fs.readFile('datos.txt','utf-8',(error,datos) => {  
        if(error) throw Error(`Error en operacion Asincronica de lectura: ${err.message}`)
        console.log('Lectura nro 5: ',datos) 
    
        fs.writeFile('datos.txt',new Date().toLocaleString(),error => {
            if(error) throw Error(`Error en operacion Asincronica de Escritura: ${err.message}`)
            console.log('Escritura: ok')

            fs.readFile('datos.txt','utf-8',(error,datos) => { 
                if(error) throw Error(`Error en operacion Asincronica de lectura: ${err.message}`) 
                console.log('Lectura nro 6: ',datos) }) 
        }) 
    }) 

}

//readWriteFsASync()


//-------------Lectura y escritura  de FileSistem  forma Asincronica (NO Bloqueante) con promesas nativas de fileSistem --------------------------------------------------

function lecturaEscritura_Asincronica_Promesas_then_catch(){

fs.promises.readFile('datos.txt','utf-8')

.then(datos => {
    console.log('Lectura ok (Antes): ',datos)
    return fs.promises.writeFile('datos.txt',new Date().toLocaleString()) 
})

.then(() => {
    console.log('Escritura ok')
    return fs.promises.readFile('datos.txt','utf-8')
})

.then(datos => {
    console.log('Lectura ok (Despues): ',datos)
})

.catch(error => `Error en operacion Asincronica de lectura / escritura: ${error.message} `)
}

//lecturaEscritura_Asincronica_Promesas_then_catch()



//--------------------------------------------------Con Async/Await--------------------------------------




async function lecturaEscritura_Asincronica_Promesas_Async_Await(){ 
    try{
        datos = await fs.promises.readFile('datos.txt','utf-8')  //Lectura
        console.log('Lectura Ok (Antes): ',datos)
        
        await fs.promises.writeFile('datos.txt',new Date().toLocaleString()) //Escritura
        console.log('Escritura: ok')
        
        datos = await fs.promises.readFile('datos.txt','utf-8')  //Lectura       
        console.log('Lectura Ok (Despues): ',datos)
    }
    catch(err){
        console.log(`Error en operacion Asincronica de lectura / escritura: ${err.message} `)  
    }
    }
    
    lecturaEscritura_Asincronica_Promesas_Async_Await()



console.log('------> Otras tareas....')


// tres manera de crear la funcion asincronica

// 1) async function nombreFuncion(){ }

// 2) const nombreVariable = async function (){ }  //funcion anonima

//3) const nombreVariable = async () => { }    //funcion anonima

