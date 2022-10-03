//API - INTERFAZ DE APLICACION 
// FRONT COMO BACK ACUERDAN QUE INFORMACION SE VA A ESTER ENVIANDO DE UN LADO AL OTRO.
//CON LA CONDICION DEL FOMRATO DE JSON - JAVASCRIPT OBTECT NOTACION

const json = {
    data : [
        {id : "001", detalle : "Lampara", precio : 223},
        {id : "001", detalle : "Lampara", precio : 223},
        {id : "001", detalle : "Lampara", precio : 223},
        {id : "001", detalle : "Lampara", precio : 223},
        {id : "001", detalle : "Lampara", precio : 223},
        {id : "001", detalle : "Lampara", precio : 223},
    ]
}

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

//ES5
let nombre2 = data.nombre
//...

//DESCONSTRUCCION DE UN OBJETO
let {nombre,  edad, amigos} = data
//Paso cada atributo del objeto a una variable individual.

//TAMBIEN PUEDO ELEGIR SACAR SOLO ALGUNOS
let {fechaIncio, ...resto} = data
console.log(fechaIncio)
console.log(resto)
//Pongo en una variable fechaInicio, y el resto de los atribuos los paso a una variable cualquiera llamada resto. Los tres punto signigican resto de los metodos o atribuos.

//DESCONTRUCCION TAMBIEN SE PUEDE IMPLEMENTAR EN ARRAY
let {a, b, c, ...end} = [1,2,3,4,5,6,7,8,9]
console.log(a)
console.log(b)
console.log(c)
console.log(end)

