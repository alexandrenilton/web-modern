// let e const
{
    var a = 2
    let b = 3
    console.log(b) // so consegue ser impressa aqui, no bloco a qual foi declarada
}
console.log(a)
// console.log(b) // nao é acessivel fora do bloco a qual foi declarada

//Template String
const product = 'iPad'
console.log(`${product} é caro demais!`)

// Destructuiring (tirar algo de dentro do outro, seja de object, array, string)
const[l, e, ...tras] = 'Cod3rs'
console.log(l, e, tras) // l=C, e=o, trans=[d, 3, r]

const [x, , y] = [1, 2, 3] // note o espaço vazio
console.log(x, y) // 1 e 3

const {idade:i, nome} = { nome: 'Ana', idade: 9}
console.log(i, nome)