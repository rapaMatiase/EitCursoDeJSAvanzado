const json2 = {
    data : [
        {
            id : 001,
            nombre : "matias",
            imagen : "",
            amigos : [
                {id : 002, nombre : "Jose", imagen : ""},
                {id : 003, nombre : "Pepe", imagen : ""},
                {id : 004, nombre : "Jose A", imagen : ""},
            ],
            fechaInicio : "09-26-2022"
        }
    ]
}

/* COMO SE DESARMAS UN JSON O OBJETO DE JS */
let data = json2.data[0]

for(let propiedad in data){
    console.log(`Estoy en la propiedad  ${propiedad} y su valor es ${data[propiedad]}`)
}