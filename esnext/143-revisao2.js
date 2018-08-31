// Arrow Function = Prioria de termos uma funcao em uma unica linha (mais enchuta)
const soma = (a, b) => a + b
console.log(soma(3, 4))

// Arrow Function
const lexico1 = () => console.log(this === exports) // this vai sempre apontar para o this de onde foi ESCRITA, nesse caso, diretamente em um arquivo do NODE, sempre aponta para exports (module.exports)
const lexico2 = lexico1.bind({}) // mesmo que force a barra, te tentar apostar para um obj usando bind, ele sempre vai apontar para exports
lexico1()
lexico2()


// parametro default
function log(text = 'Node') {
    console.log(text)
}
log() //imprime Node, assume o valor padrão
log(undefined) // imprime Node, assume o valor padrão
log(null) // imprime null, NÃO assume o valor padrão
log('Sou mais forte') // imprime: Sou mais forte


// Operador rest (Agrupar, espalhar)
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(1, 2, 3, 4, 5, 6, 7)) // agrupou tudo no array


