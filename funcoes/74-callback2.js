const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// sem callback
let notasBaixas1 = []

for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1);

// Com callback             função callback
notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas2)

// Com arrow function
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

// Crio a função usuando arrow function
const notasMenorQue7 = nota => nota < 7
// Passo essa fuuncao como parametro call back da funcao filter
const notasBaixas5 = notas.filter(notasMenorQue7)
console.log(notasBaixas5)