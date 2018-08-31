// Usada como se fosse classe em java.
// A partir de uma classe, vc cria instancias dessa classe
// Obs: Classe é uma forma diferente de escrever function no JS
// Como se fosse um Molde
function Carro(velocidadeMaxima = 200, delta = 5) {
    
    // atributo privado, nao consegue acessar: carro.velocidadeAtual;
    let velocidadeAtual = 0;


    // metodo publico
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    }

}

const uno = new Carro // ou new Carro()
uno.velocidadeAtual = 200;
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual())