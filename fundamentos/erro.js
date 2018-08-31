function tratarErrorELancar(error) {
    // throw new Error('....')
    // throw 10
    // throw true 
    // throw 'mensagem'

    throw {
        nome: error.name,
        msg: error.message,
        date: new Date(0)
    }
}

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase()+ '!!!!')
    } catch (e) {
        tratarErrorELancar(e)
    } finally {
        console.log("Bloco Finally")
    }
}

const obj1 = { nome: 'Alexandre'}
const obj2 = { name: 'Agenor'}
// imprimirNomeGritado(obj1)
imprimirNomeGritado(obj2)