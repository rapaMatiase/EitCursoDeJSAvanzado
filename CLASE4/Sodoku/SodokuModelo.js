class SodokuModel{

    #matris
    #juegoTerminado
    #observers
    constructor(){
        this.#matris = []
        this.#juegoTerminado = false
        this.#observers = []
    }

    setMatris(_matris){
        this.#matris = _matris
    }

    #noHayRepetidosEnFilas(){
        let noHayRepetiodos = true
        for(let i = 0 ; i < this.#matris.length ; i++){
            const casilla1 = this.#matris[i][0]
            const casilla2 = this.#matris[i][1]
            const casilla3 = this.#matris[i][2]
            if(casilla1.getValor() === casilla2.getValor() || casilla1.getValor() === casilla3.getValor() || casilla2.getValor() === casilla3.getValor()){
                noHayRepetiodos = false
            }
        }
        return noHayRepetiodos
    }

    #noHayRepetidosEnColumnas(){
        let noHayRepetiodos = true
        for(let j = 0 ; j < this.#matris.length ; j++){
            const casilla1 = this.#matris[0][j]
            const casilla2 = this.#matris[1][j]
            const casilla3 = this.#matris[2][j]
            if(casilla1.getValor() === casilla2.getValor() || casilla1.getValor() === casilla3.getValor() || casilla2.getValor() === casilla3.getValor()){
                noHayRepetiodos = false
            }
        }
        return noHayRepetiodos
    }

    ganador(){
        this.#juegoTerminado = this.#noHayRepetidosEnColumnas() && this.#noHayRepetidosEnFilas()
        this.#notify()
    }

    estadoJuego(){
        return this.#juegoTerminado
        
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
}