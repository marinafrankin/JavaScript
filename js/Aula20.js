//CallBack

function exec(fn, a, b){
    return fn(a, b)
}

const somaNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (w, z) => console.log(w - z)
const subtrair = (w, z) => w - z

exec(somaNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)

const r = exec(subtrair, 50, 25)
console.log(r)

setInterval(function(){
    console.log('Exec 3...')
}, 5000)

//const cb = () => console.log('Exec...') //cb = callback
//setInterval(fn, 1000)