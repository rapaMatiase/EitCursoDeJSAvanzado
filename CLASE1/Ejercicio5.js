/* Crear una segunda funcion de filtrado, que filtre todos los que no sean de gama baja
4min 11.33
*/

const array = [
    {gama : "alta",precio : 2321},
    {gama : "baja",precio : 21},
    {gama : "media",precio : 442},
    {gama : "media",precio : 555},
    {gama : "baja",precio : 112},
    {gama : "baja",precio : 223},
    {gama : "media",precio : 399}
]

const arrayFiltrado = array.filter((itemObjeto)=>{
    let valor = itemObjeto.precio
    return 100 < valor && valor < 400
})
console.log(arrayFiltrado)

const arrayFiltrado2 = arrayFiltrado.filter((itemObjeto)=>{
    return itemObjeto.gama == "baja"
})


console.log(arrayFiltrado2)