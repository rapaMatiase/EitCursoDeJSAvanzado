let array = [1,2,3,4]

function acumuladora(acumulador, valorParaAcumular){
    return acumulador + valorParaAcumular
}

//acumulador tradicional
let sumatoriaT = 0
for(let i = 0 ; i < array.length ; i++){
    sumatoriaT = acumuladora(sumatoriaT, array[i])
}
console.log(sumatoriaT)

//VERSION SUPER SIMPLIFICADA DEL ACUMULADOR EN PARADIGMA ESTRUCTURADO. EN ESTE CASO ESTO SERIA UNA NOTACION PROVENIENTE DE EL PARADIGMA FUNCIONAL.
let acumuladorR = array.reduce((acumulador, valorParaAcumular)=>(/* return */ acumulador + valorParaAcumular), 0)