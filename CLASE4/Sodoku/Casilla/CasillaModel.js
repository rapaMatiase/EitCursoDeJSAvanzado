/* Agregarle al CASILLAMODEL una referencia al SODOKUMODEL y que antens de incrementar, verifique que el juego no termino. Si le juego termino, no debe permitir que se incremente el valor. */

class CasillaModel{

    #valor
    #observers
    constructor(
        _valor
    ){
        this.#valor = _valor
        this.#observers = []
    }

    incremetar(){
        if(this.#valor < 3){
            this.#valor++
        }else{
            this.#valor = 1
        }
        //NOTIFICA QUE HUVO UN CAMBIO
        this.#notify()
    }

    #notify(){
        for(let i = 0 ; i < this.#observers.length ; i++){
            const observer = this.#observers[i]
            observer.update()
        }
    }

    subcribe(nuevoObserver){
        this.#observers.push(nuevoObserver)
    }

    getValor(){
        return this.#valor
    }
}