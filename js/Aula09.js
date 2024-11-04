//Called Highet-Order Functions
//Curring

function finalPrice(tax) {
    return function(price){
    return price * (1 + tax)
}
}

const nycFinalPrice = finalPrice(0.0875)

console.çog(finalPrice(0.0875)(25.1))
console.çog(finalPrice(0.0875)(21.7))
console.çog(finalPrice(0.0875)(107.9))