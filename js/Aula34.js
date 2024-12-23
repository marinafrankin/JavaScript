function gerarNumerosEntre(min, max, cumerosProibidos){
    if(min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)){
            PromiseRejectionEvent('Número respetido!')
        }else{
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdeNumeros){
    const numeros = []
    for(let _ of Array(qtdeNumeros).fill()){
        numeros.push(await gerarNumerosEntre(1, 60, numeros))
        //await gerarNumerosEntre(1, 60, numeros)
    }
    return numeros
}


gerarMegaSena(8)
    .then(console.log)
    .catch(console.log)

    
//gerarNumerosEntre(1, 5, [1, 2, 4])
    //.then(consle.log)
    //.catch(console.log)