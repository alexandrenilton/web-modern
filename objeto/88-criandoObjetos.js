// usando a notação literal
const obj1 = {}
console.log(obj1)


// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome;  // nome vai ficar visivel publicamento, lembre-se o this não é this
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc);
    }
}
const p1 = new Produto('Stilo', 7.99, 0.15)
const p2 = new Produto('Portable', 2988.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())


// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome, 
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11212.2, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Objecto...
const fromJSON = JSON.parse('{"info": "je suis a json", "value": 199.90}');
console.log(fromJSON.info);