const moduloA = require('../../120-moduloa') // funciona mesmo estando com o A em minusculo. correto é colocar certo!
console.log(moduloA.ola)

// usando meu node module criado
const saudacao = require('saudacao')
console.log(saudacao.ola)

// const http = require('http')
// http.createServer((requestAnimationFrame, res) => {
//     res.writable('Bom dia')
//     res.end()
// }).listen(8080)


