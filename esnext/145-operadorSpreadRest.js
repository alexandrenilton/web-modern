// operador .... rest(juntar)/spread(espalhar)
// usar rest com parâmtro de funcao

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 5233.99 }
const clone = { ativo: true, ... funcionario} // esplalha os objetos de funcionario dentro de clone, vai copiar.
console.log(clone) // Resultado: { ativo: true, nome: 'Maria', salario: 5233.99 }


// usar spread com array
const groupA = ['John', 'Taylor', 'Kate']
const groupFinal = ['Mary', 'Sophie', ...groupA, 'Layla']
console.log(groupFinal) // Resultado: [ 'Mary', 'Sophie', 'John', 'Taylor', 'Kate', 'Layla' ]

