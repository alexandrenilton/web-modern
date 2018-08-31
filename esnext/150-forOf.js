// pega em cima de valores, do que indice

for (let letra of "cod3r") {
    console.log(letra)
}

console.log()
const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) { // usando for in
    console.log(i) // index  
}

for (let assunto of assuntosEcma) {
    console.log(assunto) // valor usando for of
}

const assuntosMap = new Map([
    ['Map', { abordado: true}],
    ['Set', { abordado: true}],
    ['Promise', { abordado: false}],
])

for (let assunto of assuntosMap) {
    console.log(assunto) // imprime os array inteiro
}
console.log()
for (let chave of assuntosMap.keys()){
    console.log(chave)
}
console.log()
for (let valor of assuntosMap.values()) {
    console.log(valor)
}
console.log()
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}