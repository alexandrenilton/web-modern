class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome;
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) { // recebe um ou mais elementos
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}


const salario = new Lancamento('Salario', 25000)
const contaDeLuz = new Lancamento('Conta de Luz', -220)
const contaDeTelefone = new Lancamento('Telefone', -100)

const contas = new CicloFinanceiro(7, 2018)
contas.addLancamentos(salario, contaDeLuz, contaDeTelefone)
console.log(contas.sumario())

