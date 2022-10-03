let arrayNumeros = [1,2,3,3,4,5,6,7,8,9]

let filtrados = arrayNumeros.filter((item)=>{return item > 4 })
console.log(filtrados)

let duplicados = arrayNumeros.map((item) => {{return item * 2}})
console.log(duplicados)

//TODOS LOS ELEMENTOS TIENE QUE CUMPLIR PARA OBTENER UN VERDADERO
//Este acumula las operacion con &&
let sonTodosPares = arrayNumeros.every((item) => {return item % 2 === 0})
console.log(sonTodosPares)

//CON UN ELEMNTO QUE CUMPLA ES SUFICIENTE PARA QUE SEA VERDADERO
//Este acumula las operacion con ||
let algunosSonPares = arrayNumeros.some((item) => {return item % 2 === 0})
console.log(algunosSonPares)