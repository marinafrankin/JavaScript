const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true}
    {nome: 'Impressora', qtde: 0, preco: 649.50, fragil: true}
    {nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false}
    {nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false}
    {nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true}
]

const fragil = item => item.fragil
const getTotal = item => item.qtde * item.preco
const getMedia = (acc, el) =>{  
    const novoQtde = acc.qtde + 1
    const novoTotal = acc.total + el
return{
    qtde: novoQtde, 
    media: novoTotal,
    total: novoTotal / novoQtde
}
}



const media = carrinho
    .filter(item => item.fragil)
    .map(item.qtde * item.preco)
    .reduce((acc, el) => {
        const novoQtde = acc.qtde + 1
        const novoTotal = acc.total + el
        return{
            qtde: novoQtde, 
            media: novoTotal,
            total: novoTotal / novoQtde
        }
    }//{qtde: 0, media: 0, total: 0})

const mediaInicial = {qtde: 0, total: 0, media: 0}


const media = carrinho
    .filter(fragil)
    .map(getTotal)
    .reduce(getMedia, mediaInicial)

console.log(`A média é ${media}!`)