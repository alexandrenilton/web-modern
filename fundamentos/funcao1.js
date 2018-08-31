// funcao sem retorno

function imprimirSoma(a, b) {
  console.log(a+b)
}


function imprimirSoma(a, b, c) {
  console.log(a+b+c)
}

imprimirSoma(2, 3)
imprimirSoma(2) //NaN porque o valor b é undefined
imprimirSoma(2, 3, 4, 5, 6, 7, 8, 9) // vai somar so os 3 primeiros paramentros


// Funcao com retorno, b = 0, onde 0 é o valor default caso não seja fornecido
function soma(a, b = 0) {
  return a + b
}

console.log(soma(2,3));
console.log(soma(2));
console.log(soma()) // NaN , vai somar undefined + undefined




