const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)


const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})
console.log(filha2.nome)
filha2.nome = 'Carla' // nao vai mudar o nome, pq tá com writable: false
console.log(filha2.nome) 
console.log(`${filha2.nome} tem o cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

console.log()

for(let key in filha2) {
    filha2.hasOwnProperty(key) ? 
        console.log(`Atributo da classe: ${key}`) : console.log(`Por Herança: ${key}`)
}


