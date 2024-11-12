const path = require('path')
const { resolve } = require('path')

cosnt fs = require('fs')
cosnt path = require('path')

const caminho = path.join (_dirname, 'dados.txt')

function lerArquivo(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo){
            resolve(conteudo.toSpring())
        })
        console.log('Depois de ler')
    })
}

const caminho = path.join (__dirname, 'dados.txt')

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas =>  linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)