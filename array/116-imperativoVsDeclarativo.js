const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 8.0}
]

// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo // onde temos mais reuso, pois o getNota e o soma podem ser usandos separadamente
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

// exemplo de reuso do "soma"
const sominha = soma(10,10)
console.log(sominha)

// select codigo, nome from clientes where ativo = 1 // sql é declarativo