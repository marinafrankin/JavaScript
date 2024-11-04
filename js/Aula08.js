//Called Highet-Order Functions

function run(fn){
    fn()
}

function sayHello(){
    console.log('Hellho !')
}

run(SayHello)

run(function() {
    console.log('run!!!')
})

const result = run(Math.random)
console.log(result)