const arrayDeObjetos = [
    {numero : 1},
    {numero : 2},
    {numero : 1.5},
    {numero : 3},
    {numero : 5}
]

/* Ahora que tenemso un array de objetos, cualquier funcion que recorra el array nos devuelve un objeto con multiples atributos y metodos, no un valor primitivo. */
let arrayFiltrado  = arrayDeObjetos.filter((itemObjeto)=>{
    return itemObjeto.numero > 2
})
console.log(arrayFiltrado)

/* A la vez, el resultado va ser un array de objetos, no de valores primitivos. */