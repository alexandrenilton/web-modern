console.log(typeof Object)
console.log(typeof new Object) // chamando construtor, omitindo os () 

console.log("----------------------------")
const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

console.log("----------------------------")
class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())


