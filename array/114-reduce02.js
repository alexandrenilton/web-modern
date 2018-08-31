const alunos = [
    { nome: 'João', nota: 7.2, bolsista: false},
    { nome: 'Maria', nota: 9.1, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]


// desafio 1: todos os alunos são bolsista? 
// const todosBolsistas = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) {
//     if (acumulador && atual) {
//         acumulador = true
//     } else {
//         acumulador = false;
//     }
//     return acumulador
// })
// ou 
// criando a funcao
const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


// desafio 2: algum aluno é bolsista
// const algumaBolsista = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
//     if (acumulador || atual) {
//         return true;
//     }
//     return false;
// })
// ou
//const arrayBolsistas = alunos.map(a => a.bolsista);
const algumBolsista = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
//console.log(arrayBolsistas.reduce(algumBolsista))

//console.log(todosBolsistas)
//console.log(algumaBolsista)