/* Dado una array de numeros, crear una funcion flecha para filtrar todos los numeros mayores de 200. 
NOTA: Utilizar la funcion FILTER de array
4min 11.04
*/

const array = [222,112,42,2123,23,212]

const arrayFiltrado = array.filter((item)=>{
    return item < 200
})

console.log(arrayFiltrado)