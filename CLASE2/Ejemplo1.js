const objeto = {
    id : "001", 
    title : "Terminator I", 
    year : "09-21-1998", 
    genero : ["ficcion", "accion"],
    descripcion : "Se envia del futuro un robot para matar a Joe Conor el futuro lides de resistencia contra scalet."
}

let lineas = `
    Codigo : ${objeto.id}
    Titulo : ${objeto.title}
    Año : ${objeto.year}
    Genero :`

for(let i = 0 ; i < objeto.genero.length ; i++){
    lineas = `${lineas}
            - ${objeto.genero[i]}`
}

lineas = `
    ${lineas}
    Descripcion :
    ${objeto.descripcion}
`
console.log(lineas)