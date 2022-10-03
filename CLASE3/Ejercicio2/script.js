let elPadre = document.getElementById("padre")

function factoryElItemList(texto){
    //CREO EL ELEMETO
    let elDiv = document.createElement("div")
    //LE AGREGO EL ESTILO
    elDiv.classList.add("card")
    
    let elP = document.createElement("p")
    //CREO EL TEXTO
    let textoNode = document.createTextNode(texto)
    //ANIDO EL TEXTO DENTRO DEL ELEMENTO
    elP.appendChild(textoNode)

    elDiv.appendChild(elP)
    //INSTERTO EL ELEMENTO EN EL DOM, EN SU PADRE.
    elPadre.appendChild(elDiv)
}

