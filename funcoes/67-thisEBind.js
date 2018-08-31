const pessoa = { 
  saudacao: 'Bonjour!',
  falar() {
    console.log(this.saudacao)
  }
}

pessoa.falar()

const falar = pessoa.falar
// falar() // conflito entre paradigmas: funcional e OO

// ça veut dire que sempre a 'saudacao' vai ser resolvida em pessoa
const falarDePessoa = pessoa.falar.bind(pessoa) 

console.log('----')
const falar2 = pessoa.falar
falar2()

