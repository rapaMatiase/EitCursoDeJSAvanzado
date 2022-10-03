const objeto = {
    id : "001",
    client : {name : "Matias", lastName : "Gomez"},
    rented : [
        {id : "001", title : "Terminator", dateRent : "08-13-20022"}, 
        {id : "001", title :"Acuaman", dateRent : "08-13-20022"}, 
        {id : "001",title : "La sirenita", dateRent : "08-13-20022"}, 
        {id : "001",title : "La hisotria sin fin", dateRent : "08-13-20022"}
    ],
    banlance : 0,
    enabled : true,
    partners : []
}
/* 
Dar el siguiente formato a los datos:
- En el caso de el cliente, mostrar un linea con el "apellido, nombre"
- En el caso de los alquileres, en litar los titulos con su respectivo id. 
- En el caso de blance;
    - Si es cero significa que el cliente esta el dia. 
    - Si es Positivo, significa que tiene saldo a favor, mostrar con un + ese monto. 
    - Si es negativo, significa que adeuda plata, mostrar con un signo - ese monto.
*/

const {client, rented, banlance, partners} = objeto 

let lineas = `
    Codigo : ${objeto.id}
    Cliente : ${client.lastName}, ${client.name}
    Alquileres: 
        ${rented.reduce((acumulador, item) => {
            return `${acumulador}
            *${item.id}-${item.title}`
        }, ``) }
    Habilitado:${objeto.enabled ? "SI" : "NO"}
    Saldo : ${banlance < 0 ? `-${banlance}` : (banlance > 0 ?  `+${banlance}` : "Estas al dia")}
    Asociados : ${ partners.length === 0 ? "No tienes asociados" : partners.reduce((acumulador, item)=>{
        return `${acumulador}
        *${item}`
    }) }
`
console.log(lineas)