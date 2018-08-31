// O içamento ou hoisting ocorre de vc conseguir usar uma variavel antes mesmo dela ser declarada, sem dar erro,
// desde que ela seja declarada depois e como "var"
console.log('a = ', a)
var a = 2;  //içamento, mesmo que seja declarada depois, a instrução acima não dá erro, e sim undefined.
console.log('a = ', a)


//console.log('b = ', b) //vai dar erro, não tá hoisting
let b = 21
console.log('b = ', b)





