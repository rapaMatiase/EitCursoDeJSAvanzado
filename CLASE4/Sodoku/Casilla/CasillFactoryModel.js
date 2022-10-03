class CasillaFactoryModel{

    #max
    constructor(_max){
        this.#max = _max + 1
    }

    createCasillaModel(){
        let valor = Math.floor(Math.random() * this.#max)
        return new CasillaModel(valor)
    }

}