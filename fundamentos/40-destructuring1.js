// novo recurso do ES2015

const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco : {
    logradouro: 'Rua ABC',
    numero: 1000
  }
}

// copia de dentro do obj pessoa os atributos nome e idade
const { nome, idade } = pessoa;  
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i);

const { sobrenome, humor = true } = pessoa
console.log(sobrenome, humor)

const { endereco: { logradouro, numero} } = pessoa
console.log(logradouro, numero)