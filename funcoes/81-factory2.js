//
function criarProduto(nome, preco) {
    return {
        nome, // ou nome: nome,
        preco, // ou preco: preco
        desconto: 0.1 //valor padrão
    }
}


const prod1 = criarProduto('Sabonete', 1.22)
const prod2 = criarProduto('Shamppoo', 8.25)

console.log(`prod1 ${prod1.nome}\nprod2 ${prod2.nome}`)