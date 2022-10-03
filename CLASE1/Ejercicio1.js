/* 

Definir un array de funciones flecha. Las funciones que integran este array deben ser las siguientes.

Dado un string, crear una funcion para determianr cada una de las siguientes caracteristicas.
- Debe tener mas de 4 caracteres.
- Debe tener menso de 10 caracteres.
- Debe tener un numero al menos. Utilizar la funcion SOME de array y SPLIT de string para convertirlo en array.
4min 10.29

*/

let arrayDeFunciones = [
    (string) => {return string.length > 4},
    (string) => {return string.length < 11},
    (string) => {
        let array = string.split("")
        let algunoEsNumero = array.some((item) => {
            const numero = Number(item)
            return !isNaN(numero)
        })
    }
]
