const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro, saiu; remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // shift é o pop da primeira, tira o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona elemento no inicio
console.log(pilotos)

// splice pode adicionar e remover elementos
// add
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)
// remove
pilotos.splice(3, 1) // sai massa :(
console.log(pilotos)

const somePilots1 = pilotos.slice(2) // novo array
console.log(somePilots1)

const somePilots2 = pilotos.slice(1, 4) // indice 4 não entram vai até o 4 mas nao o inclui
console.log(somePilots2)




