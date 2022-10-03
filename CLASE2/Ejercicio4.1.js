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

/* Cambiar la funcion enListarLineasDeDetalle por un reduce. */

const {clinet, detailLineas} = objeto

let lineas = `
    Codigo : ${objeto.id}
    Cliente : ${clinet.lastName}, ${clinet.name}
    Lineas de detalle : ${detailLineas.reduce((acumulador, item)=>{
        return acumulador = `${acumulador}
        *${item.id}-${item.article}-${item.quantity}`
    }, ``)} 
    Estado : ${objeto.ready ? "LISTO" : "En prepracion"}
    paid : ${objeto.paid ? "PAGADO" : "NO PAGADO"}
    `
    console.log(lineas)