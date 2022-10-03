/* Dado una array de numeros, crear una funcion flecha para filtrar todos los numeros mayores de 200 y menores de 100. 

4min 11.10
*/

const array = [222,112,42,2123,23,212]

const arrayFiltrado = array.filter((item)=>{
    return 100 < item && item < 200
})

console.log(arrayFiltrado)