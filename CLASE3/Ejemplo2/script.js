let elPadre = document.getElementById("padre")

function factoryElItemList(){

    /* ----------------------------- CREAR EL PRIMER ---------------------------- */
    let elIl = document.createElement("li")
    elIl.classList.add("item")

    /* ------------------------ CREAR EL SEGUNDO ELEMENTO ----------------------- */
    let elA = document.createElement("a")
    elA.href = ""
    let textNode = document.createTextNode("Soy un link")
    elA.appendChild(textNode)

    /* RECIEN CUANDO EL SEGUNDO ELEMENTO ESTA COMPLETO */
    elIl.appendChild(elA)
    /* AHORA PUEDO INSERTARLO EN HTML */
    elPadre.appendChild(elIl)
}

