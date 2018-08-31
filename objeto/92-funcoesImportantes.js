const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(`Object.keys.: ` + Object.keys(pessoa)) // retorna array
console.log(`Object.values.: ` + Object.values(pessoa)) // retorna array
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]} : ${e[1]}`)
})
//ou usando destructring
Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave} : ${valor}`)
})

//Definir uma propriedade de um objeto
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, /*vai ser enumerado ou nao na lista de chaves (Object.keys(obj))
    writable: false, /* vai aceitar ser modificada? */
    value:  '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017' // não vai alterar, pois está com writable false na definição das propriedades;
console.log(pessoa)


// Object.assign (ECMAScript 2015)
const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a: 4, b: 5 }
Object.assign(dest, o1, o2) //vai concaternar os objetos o1 e o2 no objeto dest, e sobreescrever se tiver declarando a mesma variavel com novos valores
console.log(dest)