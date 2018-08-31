// estrategia 1 para gerar valor padrão

function soma(a, b, c) {
  return (a + b + c )
}

function somaZeros(a, b, c) {
  a = a || 0;
  b = b || 0;
  c = c || 0;
  return a + b + c
}

function soma1(a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c
}
console.log(soma())  // NaN
console.log(somaZeros())
console.log(soma1())
console.log(soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
  a = a !== undefined ? a : 1
  b = 1 in arguments ? b : 1
  c = isNaN(c) ? 1 : c
  return a + b + c
}
console.log(soma2(), soma2(3), soma2(1, 2), soma2(1, 2, 3))

// valor padrão do es2015 (Menos bug)
function soma3(a = 1, b = 1, c = 1) {
  return a + b + c
}
console.log(soma3(), soma3(2), soma3(4, 5))