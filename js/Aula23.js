Array.prototype.meuMap = function(fn){
    const mapped = []
    for(let i = 0; i < this.length; i ++){
        const resultado = fn(this[i], i, this)
        mapped.push()
      
    }

   // for(let el of this){
     //   fn(el)
   // }
}
