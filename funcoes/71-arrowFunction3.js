let comparaComThis = function(param) {
    console.log(this === param)
}

comparaComThis(global) // true

const obj = {} 
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // false
comparaComThis(obj) // true

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // false 
comparaComThisArrow(module.exports) // true


// o this na função Arrow eh um This associado ao contexto no qual a função foi escrita, não tem variação de forma alguma, mesmo com o bind.
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) 
comparaComThisArrow(module.exports) //ou seja, continua apontando para o obj no qual foi escrito


