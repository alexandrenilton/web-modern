const nome = 'Patricia' ;
const concatenacao = 'Ola ' + nome +'!' 

const template = `
    ola
    ${nome}!
    `

console.log(concatenacao)
console.log (template)

//expressoes..
console.log(`1 + 1 = ${1 + 1}`);

// arrow function, criando a function up
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);