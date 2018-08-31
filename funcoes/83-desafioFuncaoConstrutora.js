//Transformando uma classe em função construtora

function Pessoa (nome)  {
    this.nome = nome;

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Alexandre')
p1.falar();
console.log(p1.nome)
