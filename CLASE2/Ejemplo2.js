const objeto = {
    id : "001",
    name : "Matias",
    lastname : "Gomez",
    rented : [
        "Terminator", 
        "Acuaman", 
        "La sirenita", 
        "La hisotria sin fin"
    ],
    enabled : true,
    partners : []
}
/* 
Mostrar los siguientes datos enlistados, pero;
- En el caso de peliculas alquiladas "rented" mostrar la cantidad de alquileres, no que alquilo.
- En caso de enbled "Habilitado" mostrar un SI si es TRUE, y NO si es FALSE.
- En el caso de partners, si tiene algun asociado a la cuenta, mostrar los nombres. Si no tiene, mostrar el mensaje "No tienes asociados".
*/

function enlistarAsociados(){
    let acumulador = `
    `
    for(let i = 0 ; i < objeto.partners.length ; i++){
        acumulador = `${acumulador}
        *${objeto.partners[i]}`
    }
    return acumulador
}

/* Es verdadero ? TRUE : FALSE */
let lineas = `
    Codigo : ${objeto.id}
    Nombre : ${objeto.name}
    Apelldio : ${objeto.lastname}
    Cantidad de alquires : ${objeto.rented.length}
    Habilitado:${objeto.enabled ? "SI" : "NO"}
    Asociados : ${ objeto.partners.length === 0 ? "No tienes asociados" : enlistarAsociados() }
`
console.log(lineas)