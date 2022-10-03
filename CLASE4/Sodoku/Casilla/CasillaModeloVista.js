/* EL MODELVIEW contiene la logica de como se deberia ver la vista segun el valor del modelo o interaccion del usaurio con la interfaz grafica.*/

class CasillaModeloVista{

    #modelo
    #vista
    constructor(
        _modelo,
        _vista
    ){
        this.#modelo = _modelo
        this.#vista = _vista
        this.event()    
    }
    
    //MODELO -> VISTA
    reflesh(){
        let valorDelModelo = this.#modelo.getValor()
        this.#vista.innerHTML = valorDelModelo
    }
    //VISTA -> MODEL
    event(){
        let self = this.#modelo
        this.#vista.addEventListener("click", function(){
            self.incremetar()
        })
    }
}