
const valores = [7.7, 8.9, 6.43, 9.3]
console.log(valores[0], valores[1]);
console.log(valores[4]);
valores[4] = 20;
console.log(valores)

valores[5] = 100.21
console.log(valores.length)

valores.push({id:3}, false, null, 'test') //pode misturar coisas no array
console.log(valores)
console.log(valores[7]) // retorna false;


console.log(valores.pop()) //retira ultimo elemento do array, ele retorna o elemento tirado 'test'
console.log(valores);

delete valores[0];

console.log(valores);

console.log(typeof valores);