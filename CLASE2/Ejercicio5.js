const objeto = {
    idField : "001",
    detail : "Cancha de football",
    number : "2",
    requiredItems : [
        {id: "001", detail : "Pelota de football"},
        {id : "002", detail : "Rede de arco"},
        {id : "002", detail : "Rede de arco"}
    ],
    reservedSchedules : [
        {id : "001", date : "04-23-2022"},
        {id : "002", date : "05-23-2022"},
        {id : "003", date : "06-23-2022"}
    ],
    rainCancellation : true,
    enabled : true
}
/* 
- En el caso de rainCancellation, tener un mensaje que diga "Se cancela reservacion en caso de lluvia" si es true, "No se cancela reservacion en caso de lluvia" si es false
- En el caso de enable, determian si esta habilitada o no la instalacion.Si es True es Si, Si es False es NO.
- En el caos de reservedSchedules y requiredItems utilizar reduce para enlistar.
*/
const {requiredItems, reservedSchedules} = objeto

const acumuladorDeItemsRequeridos = requiredItems.reduce((acumulador, item)=>{
    return `${acumulador}
    *${item.detail}`
})

const acumuladorReservas = reservedSchedules.reduce((acumulador, item) => {
    return `${acumulador}
    *${item.date}`
})

let lineas = `
    id : ${objeto.idField}
    campo : ${objeto.detail} - ${objeto.number}
    Articulos requeridos : 
    ${acumuladorDeItemsRequeridos}
    Reservas :
    ${acumuladorReservas}
    Habilitado : ${objeto.enabled ? "SI" : "NO"}
    ${objeto.rainCancellation ? "SE CANCILA EN CASO DE LLUVIA" : "NO SE CANCELA EN CASO DE LLUVIA"}
`
