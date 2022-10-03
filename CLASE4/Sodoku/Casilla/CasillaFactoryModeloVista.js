class CasillaFactoryModeloVista{

    constructor(){}

    CreateCasillaModeloVista(vista, model){
        return new CasillaModeloVista(
            model, 
            vista
            )
    }
}