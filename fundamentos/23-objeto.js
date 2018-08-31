const prod1 = {}
prod1.nome = 'Celular Samsung';
prod1.preco = 4991.21
prod1['desconto'] = 0.40 // forma de criar atributo 
prod1['desconto de Promocao'] = 0.6 //evitar atributos com espaço

console.log(prod1)


const prod2 = {
  nome: 'Camisa Polo',
  preco: 79.90,
  obj: {
    blabla:1,
    obj: {
      blabla:2
    }
  }
}

console.log(prod2)
