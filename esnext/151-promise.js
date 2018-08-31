// é uma promesa
// usando para processamento assincrono


/* resumo da opera, ele espera 3 segundos, ai pega e executa o resolve, passando como parametro "frase" que é uma arrow function configurada na linha 17 */

function falarDepoisDe(segundos, frase) {
                         // resolve é um funcao callback que vai ser chamada qd a função for atendida.
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(frase => frase.concat(".@.@.@.@.@.@"))
    .then(outraFrase => console.log(outraFrase))