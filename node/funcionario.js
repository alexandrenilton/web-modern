const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const apenasChines = f => f.pais === 'China'
const apenasMulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual;
}


console.log('iniciando')

axios.get(url).then(response => {
    const funcionarios = response.data
    // desafio: Obter a mulher chinesa com menor salario
    const func = funcionarios
            .filter(apenasChines)
            .filter(apenasMulheres)
            .reduce(menorSalario)
    console.log(func)
})
