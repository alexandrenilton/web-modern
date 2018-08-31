// coleção dinâmica de pares chave/valor
const produto = new Object;
produto.nome = 'Cadeira';
produto['marca do produto'] = 'Generica';
produto.preco = 220.19;

console.log(produto)

delete produto.preco;
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 49000,
    proprietario: {
        nome: 'Paul',
        idade: 43,
        endereco: {
            logradouro: 'Jardim ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Alexandre',
        idade: 28
    }, {
        nome: 'Patricia',
        idade: 21
    }],
    calcularValorSeguro: function(){
        return 2100.99;
    }
}
// Alterar valor
carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'Rua grade';

console.log(carro)
console.log(carro.calcularValorSeguro())

//deletar valor
delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;

console.log(carro)
console.log(carro.condutores) // mesmo que tenhamos deletado os condutores na linha #43, não vai gerar erro, vai retornar undefined
// console.log(carro.calcularValorSeguro()) // erro

