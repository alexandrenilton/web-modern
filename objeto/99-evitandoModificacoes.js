// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' // ele NÃO vai inserir

delete produto.tag // ele vai deletar..
console.log(produto)


// Object.seal  selar o objecto
const pessoa = { nome: 'Alexandre', idade: 23}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa)) // true

pessoa.sobrenome = 'Silva' // NÃO consegue inserir
delete pessoa.nome // NÃO consegue deletar
pessoa.idade = 29 // consegue alterar
console.log(pessoa)

// Object.freeze = selado + valores constantes (nao podem ser modificados)
const escola = { nome: 'Municipal', diretor:'Carlinhos'}
Object.freeze(escola) 

escola.endereco = 'Rua da conchincinha' // NAO altera
delete escola.diretor // NAO deleta
console.log(escola)