


const { error } = require('console')
const fs = require('fs')

// 1)  readFileSync es sincronico
/*
let datos = fs.readFileSync('text_1.txt','utf-8')
console.log(datos)

datos = fs.readFileSync('text_2.txt','utf-8')
console.log(datos)

datos = fs.readFileSync('text_3.txt','utf-8')
console.log(datos)

datos = fs.readFileSync('text_4.txt','utf-8')
console.log(datos)
*/




//2) el readFile es Asincronico , entonces es necesario anidarlo cada uno
/*
fs.readFile('text_1.txt','utf-8',(error,datos)=>{  
    console.log(datos)

    fs.readFile('text_2.txt','utf-8',(error,datos)=>{
        console.log(datos)

        fs.readFile('text_3.txt','utf-8',(error,datos)=>{
            console.log(datos)

            fs.readFile('text_4.txt','utf-8',(error,datos)=>{
                console.log(datos)
            })
        })
    })
})


console.log('----------> Otras tareas 2) <----------')
*/

//3)
/*
function readFileCallback(file,callback){
    fs.readFile(file,'utf-8',(error,datos)=>{
        callback(datos)
    })
}



readFileCallback('text_1.txt',datos => {
    console.log(datos)

    readFileCallback('text_2.txt',datos=>{
        console.log(datos)

        readFileCallback('text_3.txt',datos=>{
            console.log(datos)
        })

        readFileCallback('text_4.txt',datos=>{
            console.log(datos)
        })
    })
})




*/
//4) 



function readFilePromesa(file){
     return new Promise((resolve,reject) => {
        fs.readFile(file,'utf-8',(error,datos)=>{
            if(error) reject (error)
            else resolve(datos)
        })
     })
}

/*
// el uso de la promesa con then/catch

readFilePromesa('text_1.txt')
.then(datos =>{
    console.log(datos)

    return readFilePromesa('text_2.txt')
})
.then(datos =>{
    console.log(datos)

    return readFilePromesa('text_3.txt')
})
.then(datos =>{
    console.log(datos)

    return readFilePromesa('text_4.txt')
})
.then(datos =>{
    console.log(datos)

})

.catch(error => console.log(error))

*/

//-----------con async / await 

async function funcion_sin_promesa_Nativa(){
    try{
        let datos = await readFilePromesa('text_1.txt')
        console.log(datos)
        
        datos = await readFilePromesa('text_2.txt')
        console.log(datos)
        
        datos = await readFilePromesa('text_3.txt')
        console.log(datos)
        
        datos = await readFilePromesa('text_4.txt')
        console.log(datos)
        
    }catch(error){
        console.log(error)
    }
}


//funcion_sin_promesa_Nativa()

// o de esta manera
let variable = async () =>{  
    try{
        let datos = await readFilePromesa('text_1.txt')
        console.log(datos)
        
        datos = await readFilePromesa('text_2.txt')
        console.log(datos)
        
        datos = await readFilePromesa('text_3.txt')
        console.log(datos)
        
        datos = await readFilePromesa('text_4.txt')
        console.log(datos)
        
    }catch(error){
        console.log(error)
    }
}

//variable()





//FileSistem ya tiene la interfaz de promesas
//uso con promesas de forma nativa en fileSistem

const test_fileSistem_con_promesa  = async () => {
   
let datos = await fs.promises.readFile('text_1.txt','utf-8')
console.log(datos)

datos = await fs.promises.readFile('text_2.txt','utf-8')
console.log(datos)

datos = await fs.promises.readFile('text_3.txt','utf-8')
console.log(datos)

datos = await fs.promises.readFile('text_4.txt','utf-8')
console.log(datos)

}

test_fileSistem_con_promesa()

console.log('----------> Otras tareas <----------')