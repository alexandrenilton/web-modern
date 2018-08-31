const fabricantes = ["Merceders", "Audio", "BMWs", "Honda"]
const carros = ["Fit", "Civic", "CR-V", "HR-V", "Mew Fit", "New Civic"]

function imprimir(nome, indice) { //ordem é elemento, index
    console.log(`${indice + 1}. ${nome}`)
}
// para cada elemento do array, ele vai chamar a funcao imprimir
fabricantes.forEach(imprimir) // para cada elemento dentro de fabricante, ele vai chamar imprimir, 
                              // passando elemento e index como parametro

fabricantes.forEach(function (a) {
    console.log(a)
})

//usando arrow function
fabricantes.forEach(fabricante => console.log(fabricante))

//usando arrow function para array carros;
console.log("--- imprimindo carros -----")
carros.forEach(carro => console.log(carro))
console.log("---- fim -----")

function imprimir2(index, name, test) {
    console.log(`${index} - ${name} - ${test}`)
}

fabricantes.forEach(imprimir2)