const quaseArray = { 0: 'Rafael', 1: 'Ana', 3: 'Patricia'}
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function() { 
        //let valor = Object.values(this)
        //console.log(`Teste: ${valor}`)
        return Object.values(this) 
    }, 
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)