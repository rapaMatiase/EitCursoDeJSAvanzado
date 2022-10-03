// Los [] indican la creacion de un ARRAY (Que es un tipo de objeto)
// Las {} indica la declaracion de un OBJETO creado por el usuario
let objeto = {
    nombre : "Matias",
    apellido : "Rapa",
    edad : 27,
    amigos : [
        "Saul", "Agustina", "Ana", "Angelica"
    ],

    enListarAmigos : function(){
        for(let i = 0 ; i < this.amigos.length ; i++){
            console.log(this.amigos[i])
        } 
    }
}

//El codigo de arriba literalmente es una instancia de objeto, no me sirve para declrar multiples copias con la palabra NEW. No es una clase.

let objeto2 = new Object()
objeto2.name = "Matias"
console.log(objeto2)


//Utiliza funciones en vez clases

function Auto(_modelo, _anio){
    this.modelo = _modelo
    this.anio = _anio

    this.getAnio = function(){
        return this.anio
    }
}

let auto1 = new Auto("Smart", "2000")
auto1.getAnio()