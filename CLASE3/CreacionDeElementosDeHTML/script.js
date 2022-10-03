//HASTA AHORA QUE PODEMOS SELECCIONAR UN ELEMENTO DEL DOM 

let elPTexto = document.getElementById("texto")
console.log(elPTexto)

//¿COMO HAGO PARA CREARLO DESDE JS Y LUEGO INSERTARLO EN HTML?

let elPCreadoPorMi = document.createElement("p")
console.log(elPCreadoPorMi)
//Ya tengo creado mi elemento de HTML, pero esta en un limbo. Esta memoria, pero no se ve en el viewport, porque no le dije al dom donde insertarlo.



//PRIMERO - Tengo que seleccionar el elemento padre
let elPadreDeMiElemento = document.getElementsByTagName("body")[0]
console.log(elPadreDeMiElemento)
//SEGUNDO - Lo inserto dentro de este
elPadreDeMiElemento.appendChild(elPCreadoPorMi)


//¿COMO INSERTO TEXTO?
let nodoTexto = document.createTextNode("Hola como va tood")
elPCreadoPorMi.appendChild(nodoTexto)