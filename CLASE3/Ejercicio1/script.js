let elPadre = document.getElementById("padre")

function factoryElItemList(texto){
    //CREO EL ELEMETO
    let elDiv = document.createElement("div")
    //LE AGREGO EL ESTILO
    elDiv.classList.add("card")
    //CREO EL TEXTO
    let textoNode = document.createTextNode(texto)
    //ANIDO EL TEXTO DENTRO DEL ELEMENTO
    elDiv.appendChild(textoNode)
    //INSTERTO EL ELEMENTO EN EL DOM, EN SU PADRE.
    elPadre.appendChild(elDiv)
}

