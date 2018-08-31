// Criando cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' // Evitar esse tipo de atribuição, tem q ter muito cuidado

const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C', attr2:'BB'} // vai ocorrer sombreamento no attr2, ficando com valor BB

console.log(filho.attr3, filho.attr2, filho.attr1)
console.log(filho.attr0) // vai encontrar pq tá no Object.prototype

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.modelo} está correndo à ${this.velAtual} km/h de ${this.velMax} km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //  shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${super.status()}`
    }
}

// estabelecer a relação de prototipo usando Object.setPrototypeOf()

Object.setPrototypeOf(ferrari, carro); // ferrari tem carro como prototype
Object.setPrototypeOf(volvo, carro); // volto vai ter carro como prototipo

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())