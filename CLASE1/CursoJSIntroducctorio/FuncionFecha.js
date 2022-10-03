/* 
Creo componentes : Se utiliza CLASES o FUNCIONES TRADICIONALES

Cuando creo interaccion con el usurario para por ejemplo un boton : Se utiliza funciones flecha. A veces tambien se utiliza la funcion anonima, pero es mas de cuadno trabajamos con JS solo, sin framework. 

*/


function saludar(nombre){/* ESTE ES EL FORMATO TRADICIONAL */
    console.log(`Hola ${nombre}`)
}

let saludar2 = function(nombre){
    console.log(`Hola ${nombre}`)
}

let saludar3 = (nombre) => (console.log(`Hola ${nombre}`))
let saludar4 = (nombre) => {console.log(`Hola ${nombre}`)}

/* ¿CUAL ES LA DIFERENCIA ENTRE USAR {} Y () EN LAS FUNCIONES FLECHA? */

/* Las parentesis solo permiten una linea de codigo */
// let funcionDeUnaLinea = (a, b, c) => (
//     if(a < b){
//         if(b < c){
//             return c
//         }else{
//             return b
//         }
//     }else{
//         if(a < c){
//             return c
//         }else{
//             return a
//         }
//     }
// )
//ESTO NO SE PUEDE HACER CON (), NECESITO SI O SI {}

/* Las llaves permiten multiples lineas de codigo. */
let funcionMultiplesLineas = (a, b, c) => {
    if(a < b){
        if(b < c){
            return c
        }else{
            return b
        }
    }else{
        if(a < c){
            return c
        }else{
            return a
        }
    }
}