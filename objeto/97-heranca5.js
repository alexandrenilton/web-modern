//Toda tem .prototype
console.log(typeof String) // é uma funcao
console.log(typeof Array) // é uma funcao
console.log(typeof Object) // e uma funcao 

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}
console.log('Escola Cod3r'.reverse())


Array.prototype.first = function() {
    return this[0]
}
console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = _ => 'Lascou tudo' //arrow function declaration, oui!! to fera!

console.log('Teste'.toString())