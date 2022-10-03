
/* PASO 1 : Crear una funcino que devuelve un array de elementos divs 3min 11.30 */

function CrearElDivsParaCasillas(){
    let acumulador = []
    for(let i = 0 ; i < 9 ; i++){
        let elDiv = document.createElement("div")
        acumulador.push(elDiv)
    }
    return acumulador
}

let elCasillaVistaDivs = CrearElDivsParaCasillas()
console.log(elCasillaVistaDivs)
let contador = 0
let sodokuModel = new SodokuModel()
let matrix = [[],[],[]]

let casillaFactoryModel = new CasillaFactoryModel(3)
let casillaFactoryModeloVista = new CasillaFactoryModeloVista()
for(let i = 0 ; i < matrix.length ; i++){
    for(let j = 0 ; j < matrix.length ; j++){
        
        //MODELO
        let casillaModel = casillaFactoryModel.createCasillaModel()
        //VISTA
        const casillaVista = elCasillaVistaDivs[contador]
        casillaVista.appendChild(document.createTextNode(casillaModel.getValor()))
        //MODELVISTA
        let casillaModelVista = casillaFactoryModeloVista.CreateCasillaModeloVista(
            casillaVista,
            casillaModel    
            )
        //OBSERVER PARA MODEL VIEW
        let observer = new Observer(casillaModelVista)
        casillaModel.subcribe(observer)
        //OBSERVER PARA SODOKU MODEL
        let obaserverSodoku = new ObserverSodoku(sodokuModel)
        casillaModel.subcribe(obaserverSodoku)
        
        matrix[i][j] = casillaModel
        contador++
    }
}
sodokuModel.setMatris(matrix)

let sodokuView = document.getElementById("desboard")

let sodokuModelView = new SodokuModelView(sodokuModel, sodokuView)

let observerSodokuModelView = new Observer(sodokuModelView)
sodokuModel.subcribe(observerSodokuModelView)

let fragment = document.createDocumentFragment()
elCasillaVistaDivs.forEach((el)=>{
    fragment.appendChild(el)
})

document.getElementById("sodoku").appendChild(fragment)