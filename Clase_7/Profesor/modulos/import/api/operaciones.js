//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export

/*
// (1)(2)(3)
const suma = (a,b) => a + b
const resta = (a,b) => a - b
const mult = (a,b) => a * b
const div = (a,b) => a / b
*/

export const suma = (a,b) => a + b     // (2)(3)
export const resta = (a,b) => a - b    // (2)(3)
export const mult = (a,b) => a * b    // (2)(3)
export const div = (a,b) => a / b    // (2)(3)

/* export default {        // (1)
    suma,   // es igual a -> suma : suma,
    resta,
    mult,
    div,
} */

/*
export {        // (2)(3)
    suma,   // es igual a -> suma : suma,
    resta,
    mult,
    div,
}
*/