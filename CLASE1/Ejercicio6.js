/* Crear una tercera funcion de filtrado, que filtre todos los que sean usados. Solo quiero nuevos.
true -> Es usado, false -> es no usado (nuevo)
4min 11.45
*/

const array = [
    {usado : true, gama : "alta",precio : 2321},
    {usado : false, gama : "baja",precio : 21},
    {usado : false, gama : "media",precio : 442},
    {usado : true, gama : "media",precio : 555},
    {usado : false, gama : "baja",precio : 112},
    {usado : true, gama : "baja",precio : 223},
    {usado : false, gama : "media",precio : 399}
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

const arrayFiltrado3 = arrayFiltrado.filter((itemObjeto)=>{
    return itemObjeto.usado == false
})
console.log(arrayFiltrado3)