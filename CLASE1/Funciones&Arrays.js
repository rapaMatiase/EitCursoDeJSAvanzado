let arrayDeFunciones = [
    (item) => {return item % 2 == 0},
    (item) => {return item % 2 == 1},
    (item) => {return item % 1 == 0},
    (item) => {return item % 1 != 0},
    (item) => {return item > 0},
    (item) => {return item < 0},
    (item) => {return item == 0},
]


// let numero = 9
// for(let i = 0 ; i < arrayDeFunciones.length ; i++){
//     const funcion = arrayDeFunciones[i]
//     console.log(`El numero ${numero} cumple? ${funcion(numero)}`)
// }

let objetoFunciones = {
    esPar : (item) => {return item % 2 == 0},
    esImapar : (item) => {return item % 2 == 1},
    esEntero : (item) => {return item % 1 == 0},
    esFloat : (item) => {return item % 1 != 0},
    esPositivo : (item) => {return item > 0},
    esNegativo : (item) => {return item < 0},
    esCero : (item) => {return item == 0},
}


let numero = 9
for(const nombreFucnion in objetoFunciones){
    const funcion = objetoFunciones[nombreFucnion]
    console.log(`El numero ${numero} cumple con la funcion ${nombreFucnion}? ${funcion(numero)}`)
}