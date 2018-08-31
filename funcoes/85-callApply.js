function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}` //retorna uma template string do resultado já calculado
}

// objeto produto
const produto =  {
    nome: 'Macbook',
    preco: 4999.90,
    desc: 0.15,
    getPreco //adiciona a funcao anterior definida
}
global.preco = 20
global.desc = 0.1
console.log(getPreco()) // acessa o global global.getPreco();


console.log(produto.getPreco())
console.log(produto.getPreco(10))
console.log(produto.getPreco( 50 , "U$"))


const carro = { preco: 18999, desc: 0.20}

// usando o call(obj)
console.log(getPreco.call(carro)) //vai pegar os valores que estao dentro do carro
// a diferença é que no call, vc pode passar mais de um parametro, sendo que o primeiro é o context, os outros podem ser parametros desse contexto.
// ex: getPreco.call(carro, 0.17, '$')) // nesse caso está apssando 0.17 de imposto e '$' como moeda

// usando apply(obj)
console.log(getPreco.apply(carro)); // mesmo do call, vai pegar os valores que estao dentro do carro
// em apply, os parametros são primeiro o contexto e os outros devem estar dentro de um array. 
// ex: getPreco.call(carro, [0.17, '$'])


console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))
console.log(getPreco.apply(global, [0.17, '$']))