const contadorA = require('./126-instanciaUnica')
const contadorB = require('./126-instanciaUnica')

const contadorC = require('./126-instanciaNova')()
const contadorD = require('./126-instanciaNova')() // Cria nova instancia

contadorA.inc();
contadorA.inc();
console.log(contadorA.valor, contadorB.valor) // 3 e 3 pois contadorB é a mesma instancia do contadorA, então se incrementar A, vai no B tbm

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) // 3 e 1 pois o contadorD cria uma nova instancia