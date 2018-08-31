const escola = "cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5));

console.log(escola.charAt(3));
console.log(escola.charCodeAt(3)) //pega o valor da tabela ascii do 3 que é 51
console.log(escola.indexOf("d"));  // pega o indice onde tem o valor d
console.log(escola.indexOf(3));  // pega o indice onde tem o valor 3

console.log(escola.substring(1)); // pega a partir do 1 ou seja o "o"
console.log(escola.substring(0, 3)); // pega do 0 até a posicão 3-1, ou seja 2 

console.log('Escola '.concat(escola).concat(" !"));
console.log('Escola '+escola+" !");
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(','))

