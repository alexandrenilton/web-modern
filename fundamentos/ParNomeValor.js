// par nome/valor
const saudacao = 'opa' // contexto léxico 1, local onde minha variavel foi declarada em meu codigo, no inicio


function exec() {
  const saudacao = 'Falaaa' // context léxico 2
  return saudacao;
}

// objectos são grupos aninhados de pares nome/valor
const cliente = {
  nome: "Alexandre",
  idade: 20,
  peso: 75,
  endereco : {
    logradouro: 'Rua da Amargura',
    numero: 171
  }
}

console.log(saudacao)
console.log(exec())