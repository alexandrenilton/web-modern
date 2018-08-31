let dobro = function (a) {
  return 2 * a;
}

let double = (a) => {
  return 2 * a
}
double = a => 2 * a // return implicito
console.log(double(Math.PI))


let ola = function () {
  return 'olá!'
}
ola = () => 'ola'
ola = _ => 'Olá' // tem um parametro, mas está omitido
console.log(ola(20, 30)) // vai ignorar os parametros, pela declaração lá de cima "_"




umaFuncao = (parametros) => `valor.: ` + 2 * parametros;

console.log(umaFuncao(10))

nomeFuncao = () => 2 + 2;

console.log(nomeFuncao())