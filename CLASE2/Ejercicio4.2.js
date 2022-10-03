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

/* Sacar los reduce en variables separadas para ordenar un poco en codigo como si fuera compoenntes. */

const {clinet, detailLineas} = objeto

const acumuladorLineasDeDetalle = detailLineas.reduce((acumulador, item)=>{
    return acumulador = `${acumulador}
    *${item.id}-${item.article}-${item.quantity}`
}, ``)

let lineas = `
    Codigo : ${objeto.id}
    Cliente : ${clinet.lastName}, ${clinet.name}
    Lineas de detalle : ${acumuladorLineasDeDetalle} 
    Estado : ${objeto.ready ? "LISTO" : "En prepracion"}
    paid : ${objeto.paid ? "PAGADO" : "NO PAGADO"}
    `
    console.log(lineas)