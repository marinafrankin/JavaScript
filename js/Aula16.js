// Cásico sibre Função 01

let a = 4
console.log(a)

//Function Declaration
function bomDia() {
    console.log('Bom Dia, Deus, Jesus, Virgem Maria e Espírito Santo!')
}

bomDia()

//Function Expression
const boaTarde = function () {
    console.log('Boa Tarde!')
}

let x = boaTarde() //undefined
boaTarde()

function somar(a = 0, b = 0) {
    return a + b
}

let resultado = somar(3, 4)
console.log(resultado)


resultado = somar(3, 4, 5, 6, 7, 8)
console.log(resultado)


resultado = somar(3)
console.log(resultado)


resultado = somar()
console.log(resultado)