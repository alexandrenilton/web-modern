// server para transformar um array em outro

/*
 * Na prática, vc cria uma ArrowFunction com oque vc quer fazer em cada elemento e aplica no map:  
 *   --> yourArray.map(arrowFunctionWithSomePurpose)
 */
const nums = [1, 2, 3, 4, 5]

// For com proposito
let resultado = nums.map(function(e){
    return e * 2
})

console.log(nums) 
console.log(resultado)

console.log(typeof resultado, typeof nums) //object, object


const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

console.log('--- Maps aninhados ---')
console.log(resultado)
resultado = nums.map(soma10).map(triplo).map(paraDinheiro) // const nums = [1, 2, 3, 4, 5, 6, 7]
console.log(resultado)

