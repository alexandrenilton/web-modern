
// Atribuiçao por valor e atribuição por referencia.

const a = {name: 'Teste'} // a na vdd tem o endereço onde está os valor {name: 'Teste'}
const b = a; //recebe o mesmo endereço que o a aponta  = > Atribuição por referencia

b.name = 'Opa'

console.log(a.name);
console.log(a.name == b.name ? 'iguais' : 'diferentes')


let c = 3 //copia por valor, cada um tem seu valor
let d = c
d++

console.log(d);
console.log(c);

//Conclusão, tipos primitivos, temos uma copia, objetos temos a copia do endereço de onde se encontra o obj.



let valor;
console.log(valor) //valor por padrão qd a variavel nao é inicializada.
//console.log(valor2) // vai dar ReferenmceError: valor2 is not defined
valor = null //ausencia de valor
console.log(valor) // resultado: null;
//console.log(valor.toString()) // cannot read property 'toString' of null

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.12
console.log(produto)
console.log(produto.preco.toString())

delete produto.preco; // apaga a variavel preco dentro de produto, tira o atributo
console.log(produto)
console.log(produto.preco)
//console.log(produto.preco.toString()) //erro


produto.preco = null // sem preço, de graça

console.log(!!produto.preco) // se falso, é pq tá nulo, então é gratuito
console.log(produto)


