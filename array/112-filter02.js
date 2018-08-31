// implementando o filter
Array.prototype.filter2 = function(callback) {
    // callback is a function
    const newArray = [];
    for (let i = 0; i < this.length ; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray;
}

// formas de filtrar um array
const produtos = [
    { nome: 'notebook', preco: 2499, fragil: true},
    { nome: 'iPad pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 2.49, fragil: true},
    { nome: 'Copo de Plastico', preco: 5.5, fragil: false}
]

// p é cada um dos produtos
console.log(produtos.filter2(function(p) {
    // return false; // para cada elemento, nao vai inserir no resultado; 
    // return true; // para cada elemento retorna true, vai inserir todos os elementos

    return p.fragil && p.preco > 500
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil 

console.log(produtos.filter2(caro))
console.log()
console.log(produtos.filter2(fragil))

console.log("Usando encadeadamente")

console.log(produtos.filter2(caro).filter2(fragil))


