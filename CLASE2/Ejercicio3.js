const objeto = {
    id : "01",
    clinet : {name : " Rocio", lastName : "Ladrero"},
    date : "09-21-2022",
    detailLineas : [
        {id : "001", article : "Cepillo",  quantity : 12},
        {id : "002", article : "Vasos",  quantity : 102},
        {id : "003", article : "Microfono",  quantity : 20},
        {id : "004", article : "Lampara",  quantity : 3}
    ],
    paid : true,
    ready : false,
}

/* Crear el codigo necesario para desarmar el objeto y mostrar un texto con cada dato en una linea. 
En el caso de las lineas de detalle, mostrar una lista con el id, el articulo y la cantiadad solicitada.
En el caso dde paid, mostrar el mensaje "PAGADO" si es TRUE, "NO PAGADO" si es false. El resto queda igual que antes.
4min 9.25 */

const {clinet, detailLineas} = objeto

function enlistarLineasDeDetalle(lineasDeDetalle){
    let acumulador = `
    `
    for(let i = 0; i < lineasDeDetalle.length; i++){
        acumulador = `${acumulador}
        *${lineasDeDetalle[i].id}-${lineasDeDetalle[i].article}-${lineasDeDetalle[i].quantity}`
    }
    return acumulador
}

let lineas = `
    Codigo : ${objeto.id}
    Cliente : ${clinet.lastName}, ${clinet.name}
    Lineas de detalle : ${enlistarLineasDeDetalle(detailLineas)}
    Estado : ${objeto.ready ? "LISTO" : "En prepracion"}
    paid : ${objeto.paid ? "PAGADO" : "NO PAGADO"}
    `
    console.log(lineas)