//Função Contrutora
function Produto(nome, preco, desc = 0.50) {
    this.nome = nome
    this.preco = preco
    this._desc = desc

    this.precoFinal = function(){
        return this.preco * (1 - this._desc)
    }
}

Produto.prototype.log = function(){
    console.log(`Nome: ${this.nome} Preço: R$ ${this.preoco}`)
}

Object.defineProperties(Produto.prototype, 'desc', {
    get: function(){
        return this._desc
    }
})

Object.defineProperties(Produto.prototype, 'desc', {
    get: function(){
        return `${this._desc * 100}% de desconto!`
    },
    set: function(novoDesconto){
        if(novoDesconto >= 0 && novoDesc <= 1){
            this._desc = novoDesc
        }
    }
})

cosnt p1 = new Produto('Caneta', 10) //p1 = produto 1
console.log(p1.nome)
p1.log()

cosnt p2 = new Produto('Geladaeira', 3000)
console.log(p2.preco)
console.log(p2.precoFinal())
p2.desc = 0.99
console.log(p2.desc)
console.log(p2.descString)