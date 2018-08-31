// implementar o video forEach2
Array.prototype.forEach2 = function(callback) {
    for (let i=0; i<this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Alexandre', 'Alex', 'Arthur', 'Bruno']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice +1} ${nome}`)
})

