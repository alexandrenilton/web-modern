const alunos = [
    { nome: 'João', nota: 7.2, bolsista: false},
    { nome: 'Maria', nota: 9.1, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

console.log( alunos.map(a => a.nota)) //imprime array só com as notas, usou o map para isso

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    // console.log(acumulador, atual)
    return acumulador + atual
} /*, 10 passando 10 como valor inicial*/)

console.log(resultado)