let elPadre = document.getElementsByTagName("body")[0]

function factoryElP(texto){
    //CREO EL ELEMETO
    let elP = document.createElement("p")
    //LE AGREGO EL ESTILO
    elP.classList.add("textoEspecial")
    //CREO EL TEXTO
    let textoNode = document.createTextNode(texto)
    //ANIDO EL TEXTO DENTRO DEL ELEMENTO
    elP.appendChild(textoNode)
    //INSTERTO EL ELEMENTO EN EL DOM, EN SU PADRE.
    elPadre.appendChild(elP)
}

