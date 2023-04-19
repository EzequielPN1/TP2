
console.log('------> Inicio del programa')

const fs = require('fs')

//------------lectura y escritura forma Sincronica (Bloqueante)--------------------------


let datos = fs.readFileSync('datos.txt','utf-8')  //Lectura
console.log('Lectura nro 1: ',datos)

fs.writeFileSync('datos.txt',new Date().toLocaleString()) //Escritura
console.log('Escritura: ok')

datos = fs.readFileSync('datos.txt','utf-8')  //Lectura
console.log('Lectura nro 2: ',datos)


//usamos una funcion para abarcar los dos metodos y agregamos un manejo de errores
function readWriteFsSync(){ 
try{
    datos = fs.readFileSync('../datosNoexiste.txt','utf-8')  //Lectura de un archivo erroneo
    console.log('Lectura nro 3: ',datos)
    
    fs.writeFileSync('datos.txt',new Date().toLocaleString()) //Escritura
    console.log('Escritura: ok')
    
    datos = fs.readFileSync('datos.txt','utf-8')  //Lectura
    console.log('Lectura nro 4: ',datos)
}
catch(err){
    console.log(`Error en operacion sincronica de lectura / escritura: ${err.message} `)  
}
}

readWriteFsSync()




//---------CALLS BACKS-----------------

function operacion(a,b,callback){
    return callback(a,b)
}


const suma = (a,b) => a + b
const resta = (a,b) => a - b
const multi = (a,b) => a * b
const div = (a,b) => a / b
const modulo = (a,b) => a % b

const n1 =6, n2 =4

console.log('Suma: ',operacion(n1,n2,suma))
console.log('Resta: ',operacion(n1,n2,resta))
console.log('Multiplicacion: ',operacion(n1,n2,multi))
console.log('Division: ',operacion(n1,n2,div))
console.log('Resto o modulo: ',operacion(n1,n2,modulo))

//--------------------------------------------------------

//setInterval(() => console.log(Date.now()),1000) // EJECUTA LA FUNCION POR INTERVALO DE TIEMPO
//setTimeout(() => console.log(Date.now()),1000)  //EJECUTA LA FUNCION DE FORMA DEMORADA


//-------------Lectura y escritura Asincronica (NO Bloqueante)--------------------------------------------------


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

readWriteFsASync()


console.log('------> Otras tareas....')




