const suma = (a,b) => a+b
const resta = (a,b) => a-b
const mult = (a,b) => a*b
const div = (a,b) => a/b



/*
//Foma 1
export default {
    suma,   //es igual a  -> Suma:suma
    resta,
    mult,
    div,
}
*/


//Forma 2 -- Forma 3

export  {
    suma,   //es igual a  -> Suma:suma
    resta,
    mult,
    div,
}




//otra forma es poner export a cada metodo o 
/*
export const suma = (a,b) => a+b
export const resta = (a,b) => a-b
export const mult = (a,b) => a*b
export const div = (a,b) => a/b
*/



//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export