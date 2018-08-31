let isAtivo = false
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); // de morgan para mostrar como boolean, pois se colocar isAtivo, vai mostar 1 e nao true or false

console.log('os verdadeiros..')
console.log('!!3        => ' + !!3)
console.log('!!-1       => ' + !!-1)
console.log("!!' '      => " + !!' ') // but console.log(!!'') is false
console.log('!![]       => '+!![])
console.log('!!{}       => '+!!{})
console.log('!!Infitiny => '+!!Infinity)
console.log(!!(isAtivo = true)); //pega o true e nao se deu certo ou não a atribuição


console.log('os falsos..')
console.log(!!0);
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log(!!(isActive = 0))

console.log('pra finalizar..')
console.log(!! ('' || null || 0 || ' '))


// uso de prache do || 
let nome = ''
console.log(nome || 'Desconhecido');