// funcão faz a soma de todos os argumentos passados
function soma() {
  let soma = 0
  for (i in arguments) {
    soma += arguments[i]
  }
  return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(1, 2))
console.log(soma(1, 2, 3))
console.log(soma(1.1, 1.2, 1.3, 2.2, 3.4))
console.log(soma(1.2, 3.2, 'teste')) // 4.4teste
console.log(soma(1, 2, 3, 4, 5, 10, 20, 30, 40, 50)) // 165
console.log(soma(1, 2, 3, 4, 5, 10, 20, 30, 40, -1000)) // --885
console.log(soma('a', 'b', 'c')) // 0abc

