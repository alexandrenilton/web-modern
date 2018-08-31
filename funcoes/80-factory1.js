// Factory simples, uma função que retorna um objeto
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

const pessoa1 = criarPessoa();
const pessoa2 = criarPessoa();
console.log(`pessoa1 ${pessoa1.nome}\npessoa2 ${pessoa2.nome}`)

