// IIFE => Immediately Invoked Function Expression
(function () {
    console.log('Será executado na hora')
    console.log('Foge do escopo mais abrangente!')
    console.log('todas as var criadas aqui não alteram a global e nem sao criadas no global')
    console.log(a) //undefined
})()

console.log('----------------------------------------')

console.log('Aqui, volta para o escopo global')
var a = 'Alexandre'
console.log(a)