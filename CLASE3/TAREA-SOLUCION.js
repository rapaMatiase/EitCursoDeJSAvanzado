const objeto = {
    idRemito: "001",
    contacto : { name : "Jose", lastname : "Perez", telefono : "12322232"},
    direccionDeEntrega : {
        localidad : "Gran buenos aires",
        partido : "San isidro",
        calle : "Chile",
        altura : "2231",
        piso : "",
    },
    lineasDeDetalle : [
        {id : "001", article : {detial : "Cepillo"},  quantity : 12, pedido : "A"},
        {id : "002", article : {detial :"Vasos"},  quantity : 102, pedido : "A"},
        {id : "003", article : {detial :"Microfono"},  quantity : 20, pedido : "B"},
        {id : "004", article : {detial :"Lampara"},  quantity : 3, pedido : "E"}
    ]
}

const {lineasDeDetalle, contacto, direccionDeEntrega} = objeto

const acumuladorDeLineasDeDetalle = lineasDeDetalle.reduce((acumulador, item)=>{
    const {article} = item
    return `${acumulador}
    * ${article.detial} - ${item.quantity} - Pedido ${item.pedido}`
}, ``)

let lineas = `
    Codigo : ${objeto.idRemito}
    Contacto : ${contacto.lastname}, ${contacto.name} - Tel : ${contacto.telefono}
    Direccion de entrega : ${direccionDeEntrega.localidad}, ${direccionDeEntrega.partners}, ${direccionDeEntrega.calle} ${direccionDeEntrega.altura} ${objeto.piso}
    Lineas de entrega:
    ${acumuladorDeLineasDeDetalle}
    `
console.log(lineas)