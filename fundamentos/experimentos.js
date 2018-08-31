let a = 3;

global.b = 123

this.c = 456
this.d = false;
this.e = 'test'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma variavel maluca: sem var e let!
abc = 3 // don't do that!
console.log(global.abc)

