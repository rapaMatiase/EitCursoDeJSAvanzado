const objeto = {
    id : "01",
    clinet : "Rocio",
    date : "09-21-2022",
    detailLineas : ["001","002","003","004"],
    ready : false,
}

/* Crear el codigo necesario para desarmar el objeto y mostrar un texto con cada dato en una linea. En el caso de las lineas de detalle, mostrar cuantas tiene asociado el objeto y en el caso de ready mostrar "Listo" si es true, "En preparacion" si es false. 4min 9.25 */
let lineas = `
    Codigo : ${objeto.id}
    Cliente : ${objeto.clinet}
    Fecha de realizacion : ${objeto.date}
    Cantidad de lineas de detalle : ${objeto.detailLineas.length}
    Estado : ${objeto.ready ? "LISTO" : "En prepracion"}
    `
console.log(lineas)