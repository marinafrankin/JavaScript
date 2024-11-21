//Função Construtora
function Produto(nome, preco, desc = 0.15) {
    this.nome = nome
    this.preco = preco
    this.desc = desc

    this.precoFinal = function(){
        return this.preco * (1 - this.desc)
    }
}

//console.log(typeof Produto)
//console.log(typeof Promise)
//console.log(typeof Object)


cosnt p1 = new Produto('Caneta', 8.59) //p1 = produto 1
console.log(p1.nome)

cosnt p2 = new Produto('Geladaeira', 2345.98)
console.log(p2.preco)
console.log(p2.precoFinal())
