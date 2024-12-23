class Produto{

     constructor(nome, preco, desc =0.5){
        this.nome = nome
        this.preco = preco
        this.desc = desc
     }

     get nome(){
        return `Prosuto: ${this._nome}`
     }

     Set nome(novoNome){
        this._nome = novoNome.toUpperCase()
     }

     get preco(){
        return this._preco
     }

     set preco(novoPreco){
        if(novoPreco >= 0){
            this._preco = novoPreco
        }
     }

     get precoFinal(){
        return this.preco * (1 - this.desc)
     }
}

cosnt p1 = new Produto('Caneta', 10) //p1 = produto 1
//p1.nome = 'caneta'
p1.preco = -20
console.log(p1.nome)
console.log(p1.preco)

cosnt p2 = new Produto('Geladaeira', 10000, 0.8)
console.log(p2.preco)
console.log(p2.precoFinal())