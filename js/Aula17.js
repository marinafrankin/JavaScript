function bomDia() {
    console.log('Bom Dia!')
}

const boaTarde = function abc() {
    console.log('Boa Tarde!')
}


//1 ) Passar uma função como param para outra função
function executarQualquerCoisa(fn) {
   if(typeof fn === 'function'){
        fn()
   }
    // console.log(typeof fn)
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

//2 ) Retornar uma função a partir de uma outra função

function potencia(base, exp) {
    return function(exp) {
       return Math.pow(base, exp)
    } 
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

const pot34 = potencia(3)(4)
console.log(pot34)

console.log(potencia(3)(4)) // 3 elevado a 4
