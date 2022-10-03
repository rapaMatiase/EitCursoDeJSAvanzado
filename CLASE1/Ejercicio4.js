/* Refactorizar el codigo para que filtre todos los objetos con precio menos de 100 y meyor que 400.
3min 11.21
*/

const array = [
    {prcio : 2321},
    {prcio : 21},
    {prcio : 442},
    {prcio : 555},
    {prcio : 112},
    {prcio : 223}
]

const arrayFiltrado = array.filter((itemObjeto)=>{
    let valor = itemObjeto.precio
    return 100 < valor && valor < 400
})

console.log(arrayFiltrado)