/* Crear una Curata funcion de filtrado, que filtre por la categoria cosina. 
3min 11.53

*/

const array = [
    {categoria : "Cocina",usado : true, gama : "alta",precio : 2321},
    {categoria : "Tegnologia",usado : false, gama : "baja",precio : 21},
    {categoria : "Baño",usado : false, gama : "media",precio : 442},
    {categoria : "Cocina",usado : true, gama : "media",precio : 555},
    {categoria : "Living",usado : false, gama : "baja",precio : 112},
    {categoria : "Living",usado : true, gama : "baja",precio : 223},
    {categoria : "Cocina",usado : false, gama : "media",precio : 399}
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

const arrayFiltrado4 = arrayFiltrado.filter((itemObjeto)=>{
    return itemObjeto.categoria == "Cocina"
})
console.log(arrayFiltrado4)