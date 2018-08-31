const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao() // vai imprimir Global, pois a funcao carrega em si, o local onde ela foi declarada e sabe qual o valor proximo de onde ela foi declarada
}

exec();