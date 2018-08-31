/* 

Links:
http://files.cod3r.com.br/curso-js/turmaA.json
http://files.cod3r.com.br/curso-js/turmaB.json
http://files.cod3r.com.br/curso-js/turmaC.json

*/

// com promise..
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados =>{
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e){
                    reject (e)
                }
            })
        })
    })
}

let nomes = []
// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`)) 
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//             console.log(nomes)
//         })
//     })
// })

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas)) // faz um spread, pega turmas  (...turmas) q é um array com 3 elementos e espalha em uma única turma
    .then(alunos => alunos.map ( aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))
    // .then(x => console.log(x))
    

    getTurma('D').catch(e => console.log(e.message)) //Unexpected token < in JSON at position 0