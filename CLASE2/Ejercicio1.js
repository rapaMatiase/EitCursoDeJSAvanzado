const objeto = {
    id : 0001,
    nombre : "Saul",
    apellido : "Choque",
    phoneNumber : "1132655467",
    email : "sual.choque@yahoo.com.ar",
    pedidos : ["A","B","C","D"],
}

/* Crear el codigo necesario para desarmar el objeto y mostrar un texto con cada dato en una linea. En el caso del array de pedidos, mostrar como si fuese una lista de viñetas. 4min 9.25 */
let lineas = `
    Codigo : ${objeto.id}
    Nombre : ${objeto.nombre}
    Apelldio : ${objeto.apellido}
    Telefono : ${objeto.phoneNumber}
    Mail : ${objeto.email}
    Pedidos:`

for(let i = 0 ; i < objeto.pedidos.length ; i++){
    lineas = `${lineas}
        *${objeto.pedidos[i]}`
}
console.log(lineas)