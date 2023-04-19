
//-------------------SetTimeout , setInterval-------------------------------------

//console.log('Inicio delay',new Date().toLocaleString())
//setTimeout(()=> console.log('Fin delay',new Date().toLocaleString()),2000)

//console.log('Inicio Timer',new Date().toLocaleString())
//setInterval(()=> console.log('Timer',new Date().toLocaleString()),2000)


//------------------------Callback sincronico con  Funciones como parametros ----------------------

const funcion_potencia = (b,e) => b ** e // elevado a la e , sino la funcion antigua Match.pow(b,e)

//console.log(funcion_potencia(2,3))


 const funcion_Callback = (a,b,callback) => callback(a,b)  

 //console.log(funcion_Callback(2,3,funcion_potencia))


//------------------------Callback sincronico:
 const funcion_potencia_callback_sincronica = (a,b,callback) =>{
    callback(funcion_Callback(a,b,funcion_potencia))
}

//------------------------Callback Asincronico: 
const funcion_potencia_callback_Asincronica = (a,b,callback) =>{
   setTimeout(() => callback(funcion_Callback(a,b,funcion_potencia)),1000) 
}

//-------------------------Ejecucion de tareas sincronicas----------------------------------------

/*
let resultado = funcion_Callback(2,2,funcion_potencia)
console.log(resultado)

resultado = funcion_Callback(resultado,2,funcion_potencia)
console.log(resultado)


resultado = funcion_Callback(resultado,2,funcion_potencia)
console.log(resultado)

console.log('--------------->Otras tareas <---------------') 
*/

/*
funcion_potencia_callback_sincronica(2,2,resultado =>{
   console.log(resultado)
   funcion_potencia_callback_sincronica(resultado,2,resultado =>{
      console.log(resultado)
      funcion_potencia_callback_sincronica(resultado,2,resultado =>{
         console.log(resultado)
      } )
   } )
} )

console.log('--------------->Otras tareas <---------------') 
*/

//-------------------------Ejecucion de tareas Asincronicas----------------------------------------
//-----------------------Infierno de callbacks ---------------------------------
/*
funcion_potencia_callback_Asincronica(2,2,resultado =>{
   console.log(resultado)

   funcion_potencia_callback_Asincronica(resultado,2,resultado =>{
      console.log(resultado)

      funcion_potencia_callback_Asincronica(resultado,2,resultado =>{
         console.log(resultado)
         
         funcion_potencia_callback_Asincronica(resultado,2,resultado =>{
            console.log(resultado)

            funcion_potencia_callback_Asincronica(resultado,2,resultado =>{
               console.log(resultado)

               funcion_potencia_callback_Asincronica(resultado,2,resultado =>{
                  console.log(resultado)

                  funcion_potencia_callback_Asincronica(resultado,2,resultado =>{
                     console.log(resultado)

                     funcion_potencia_callback_Asincronica(resultado,2,resultado =>{
                        console.log(resultado)
                     } )
                  } )
               } )
            } )
         } )
      } )
   } )
} )

console.log('--------------->Otras tareas <---------------') 
*/



//-------------------------------------------------------------------------------------------------- // envolvemos en una funcion

function operaciones_callbacks(){

funcion_potencia_callback_Asincronica(2,2,resultado =>{
   console.log(resultado)

   funcion_potencia_callback_Asincronica(resultado,2,resultado =>{
      console.log(resultado)

      funcion_potencia_callback_Asincronica(resultado,2,resultado =>{
         console.log(resultado)
         
         funcion_potencia_callback_Asincronica(resultado,2,resultado =>{
            console.log(resultado)

            funcion_potencia_callback_Asincronica(resultado,2,resultado =>{
               console.log(resultado)

               funcion_potencia_callback_Asincronica(resultado,2,resultado =>{
                  console.log(resultado)

                  funcion_potencia_callback_Asincronica(resultado,2,resultado =>{
                     console.log(resultado)

                     funcion_potencia_callback_Asincronica(resultado,2,resultado =>{
                        console.log(resultado)
                     } )
                  } )
               } )
            } )
         } )
      } )
   } )
} )
}

//operaciones_callbacks()



//------------------------Callback Asincronico con Promesas ( Resolucion de los infiernos de callbacks ) ------------------------------------------------


const funcion_potencia_promesa = (a,b) =>{
       return new Promise((resolve,reject) => {
        // resolve() // ejecucion cuando la promesa se cumplio
        // reject()  // ejecucion cuando la promesa No se cumplio
        const aType = typeof a
        const bType = typeof b

        if(aType == 'number'  && bType == 'number'){

         setTimeout(() => resolve(funcion_Callback(a,b,funcion_potencia)),1000) 
         
        }
        else{
            const error = {
               razon:'Alguno de los parametros de entrada no es un numero',
               aType: aType,
               bType: bType,
               a,b
            }

            reject(error)

        }

       })
  
}

//---------------------------Ejecucion de tareas asincronicas con promesas encadenadas (interfaz the/catch) -----------------------------------

function funcion_promise_then_cacth (){

   funcion_potencia_promesa(2,2)
   .then(respuesta => {
      console.log(respuesta)
      return funcion_potencia_promesa(respuesta,2)

   })
   .then(respuesta => {
      console.log(respuesta)
      return funcion_potencia_promesa(respuesta,2)

   })
   .then(respuesta => {
      console.log(respuesta)
      return funcion_potencia_promesa(respuesta,2)

   })
   .then(respuesta => {
      console.log(respuesta)
      return funcion_potencia_promesa(respuesta,2)

   })
   .then(respuesta => {
      console.log(respuesta)
      return funcion_potencia_promesa(respuesta,2)

   })
   .then(respuesta => {
      console.log(respuesta)
      return funcion_potencia_promesa(respuesta,2)

   })
   .then(respuesta => {
      console.log(respuesta)
      return funcion_potencia_promesa(respuesta,2)

   })
   .then(respuesta => {
      console.log(respuesta)
   })
   .catch(error => console.log('ERROR: ',error))
   
}

//funcion_promise_then_cacth ()






//---------------------------Ejecucion de tareas asincronicas con promesas encadenadas (interfaz async/await) -----------------------------------

 async function funcion_1_promesa_async_await(){

   try{
      let resultado =  await funcion_potencia_promesa(2,2)
      console.log(resultado)
    
      resultado =  await funcion_potencia_promesa(resultado,2)
      console.log(resultado)
    
      resultado =  await funcion_potencia_promesa(resultado,2)
      console.log(resultado)
    
      resultado =  await funcion_potencia_promesa(resultado,2)
      console.log(resultado)
    
      resultado =  await funcion_potencia_promesa(resultado,2)
      console.log(resultado)
    
      resultado =  await funcion_potencia_promesa(resultado,2)
      console.log(resultado)
    
      resultado =  await funcion_potencia_promesa(resultado,2)
      console.log(resultado)
    
      resultado =  await funcion_potencia_promesa(resultado,2)
      console.log(resultado)

   }catch(error){

      console.log('ERROR: ',error)
      
   }





}

//funcion_1_promesa_async_await()



async function funcion_2_promesa_async_await(){

   try{
      let resultado =2
       for (let index = 0; index < 8; index++) {
         resultado =  await funcion_potencia_promesa(resultado,2)
         console.log(resultado)       
       }




   }catch(error){

      console.log('ERROR: ',error)
      
   }


}


funcion_2_promesa_async_await()

console.log('--------------->Otras tareas <---------------') 

//setInterval(()=> console.log('Otra tarea programada',new Date().toLocaleString()),2000)
