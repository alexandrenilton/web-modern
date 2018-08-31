const tecnologias = new Map()
tecnologias.set('react', { framework: false} )
tecnologias.set('angular', { framework: true} )

console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () {}, 'Funcao'],
    [{}, 'Objecto'],
    [123, 'Número']
])
chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

console.log( chavesVariadas.has(123) ) //se ta presente o elemento de chave 123
chavesVariadas.delete(123)
console.log( chavesVariadas.has(123) ) //se ta presente o elemento de chave 123
console.log(chavesVariadas.size) // mostra a quantidade de elementos contidos dentro do map