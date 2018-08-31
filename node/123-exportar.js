console.log(module.exports === this) // true
console.log(module.exports === exports) // true

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null // aponta pra variavel q tem exports, entao nao vai anular o module.exports
console.log(module.exports)

exports = {
    nome: 'Test'
}

console.log(module.exports);  // nao altera