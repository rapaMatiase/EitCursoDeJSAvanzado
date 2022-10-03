class SodokuModelView{
    #model
    #view
    constructor(
        _model,
        _view
    ){
        this.#model = _model
        this.#view = _view
    }

    reflesh(){
        if(this.#model.estadoJuego() == true){
            this.#view.innerHTML = "GANASTE"
        }
    }
    event(){}
}