class Observer{

    #modeloVista
    constructor(_modeloVista){
        this.#modeloVista = _modeloVista
    }

    update(){
        this.#modeloVista.reflesh()
    }
}

class ObserverSodoku{
    #sodokuModel
    constructor(_sodokuModel){
        this.#sodokuModel = _sodokuModel
    }

    update(){
        this.#sodokuModel.ganador()
    }
}