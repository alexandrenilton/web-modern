// o Array é um objeto.
console.log(typeof Array, typeof new Array, typeof []) /* [] é um array literal*/

// Array é dinamico, aceita vários tipos de dados, nao necessarimente precisam ser do mesmo tipo.  (aceita dados heterogenios)

let aprovados = new Array('Bia', 'Carlos', 'Riana')
console.log(aprovados) // imprime na ordem que foi inserido
aprovados = ['bia', 'carlos', 'ana']
console.log(aprovados[0])
console.log(aprovados[3]) // nao existe no array ==> undefined

aprovados[3] = 'paulo' // vai adicionar Paulo
console.log(aprovados[3]) 
aprovados.push('adonis')
console.log(aprovados, aprovados.length)

aprovados[9] = 'rafael'
console.log(aprovados) // elementos entre 5 e 8 vai ficar undefined
console.log(aprovados[6]) // undefined

aprovados.sort() // vai ordernar o array
console.log(aprovados)

delete aprovados[2] // deleta elemento de indice 2 e coloca undefined no lugar
console.log(aprovados[2])
console.log(aprovados)

aprovados = [ 'Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // a partir do indice 1, vai excluir 1 elemento
console.log(aprovados)

console.log()

aprovados2 = ['Antonio', 'Bruno', 'Castro', 'Diego']
aprovados2.splice(1, 2, 'Element1', 'Element2', 'Element3') // Vai tirar 2 elementos no indice 1, e inserir Element1, Element2 e Element3 no lugar, 
                                                            // se tiver espaço a ser ocupado ele empurra o elemento para frente
console.log(aprovados2)

console.log()

aprovados3 = ['Antonio', 'Bruno', 'Castro', 'Diego']
aprovados3.splice(1, 0, 'Element1', 'Element2', 'Element3') // Vai adicionar os ElementX depois do primeiro indice, e empurrar o resto 
console.log(aprovados3)