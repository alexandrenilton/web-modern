const sequencia = {
    _valor: 1, // convencao que essa variavel é privada 
    
    get valor() {
        return this._valor++
    }, 
    
    set valor(valor) { 
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor) // vai chamar o metodo get..
sequencia.valor = 1000 // vai chamar o método set
console.log(sequencia.valor, sequencia.valor) // vai chamar o método get
sequencia.valor = 1100 // vai chamar o método set novamente
console.log(sequencia.valor, sequencia.valor) // vai chamar o método get


