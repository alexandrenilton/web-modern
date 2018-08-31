const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__  === Object.prototype) //true or false? => True 
console.log(volvo.__proto__ === Object.prototype) // true or false? => True
console.log(Object.prototype.__proto__) //retorna null? null

console.log() //pular linha

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto); // function function
console.log(Object.prototype, MeuObjeto.prototype) // {} MeuObjeto {}