//for in em cima de array, existe o foreach e outros melhores, mas por agora, o for in
const notas = [6.8, 9.1, 9.5, 7.5, 4.5, 8.9, 10, 9.5, 6.7, 8.6]
for (let i = 0; i < notas.length; i++) {
  console.log(`notas: ${notas[i]}.`)
}
//o a, traz o INDICE e não o valor do array.
for (a in notas )  {
  console.log(`notas: ${notas[a]}`)
}

// for in em objetos
const pessoa = {
  nome: "Patricia",
  sobrenome: "Abravanel",
  idade: 38,
  peso: 51
}
for (atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`)
}