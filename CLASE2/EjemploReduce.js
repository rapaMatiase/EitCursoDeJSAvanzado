let array = [1,2,3,4]

//acumulador tradicional
let sumatoriaT = 0
for(let i = 0 ; i < array.length ; i++){
    sumatoriaT = sumatoriaT + array[i]
}
console.log(sumatoriaT)

//Acumulacion por metodo de array
let sumatoriaR = array.reduce((sumatoria, itemPosicionActual)=>(sumatoria + itemPosicionActual), 0)
console.log(sumatoriaR)

/* 
- El reduce funcioan como for, pero devuelve el valor resultante de la acumulacion. 

- La funcion flecha o cualquier otra, requiere recibir dos parametros. El acumulador, y el actual valor en la posicion del array.

-El segundo argumento que recibe el REDUCE es el valor con el cual tiene que estar inicializado el acumualdor.
*/

let arrayString = ["a","b","c"]

let textoConcadenado = arrayString.reduce((acumulador, item)=>(`${acumulador}${item}`), ``)
console.log(textoConcadenado)