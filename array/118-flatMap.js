const escola = [{
    nome: 'Turma Manhã 1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3           
    }]
}, {
    nome: 'Turma Noturno',
    alunos: [{
        nome: 'Regina',
        nota: 8.9
    }, {
        nome: 'Ricardo',
        nota: 7.3           
    }]
}]

const getNotaDoAluno = aluno => aluno.nota //extrai a nota do aluno
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)
const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

// Como tirar as notas da turma manha e noturno e deixar todas as notas em um unico array?
//    para ficar com o resultado idem de: console.log([].concat([8.1, 9.3], [ 8.9, 7.3])) 
//  --> RESPOSTA: usando o flatMap.. uma funcao criada (Nao existe na API padrão)
//
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}
const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)
