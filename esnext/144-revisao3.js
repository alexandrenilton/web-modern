// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// melhorias na notação literal
const nome = 'Carla'
const pessoa = {
    nome, // vai criar: nome: 'Carla'
    ola() { //antes: ola: function() {}
        return 'Ola pessoas!'
    }
}

console.log(pessoa.nome, pessoa.ola()) // Carla Ola pessoas!

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())