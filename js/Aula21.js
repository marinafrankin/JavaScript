const fs = require('fs')
const path = require('path')

const caminho = path.join()

function exibirConteudo(err, conteudo){
    console.log(conteudo.toString())
}

console.log('Inicio...')
fs.readFile(caminho, exibirConteudo)
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))
console.log('Fim...')

//fs.readFileSync(caminho)

console.log('Inicio Sync...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim Sync...')