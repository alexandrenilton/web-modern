//vai tirar do objeto passado os atributos min e max
function rand ({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = { max: 50, min: 40 }
const obj2 = {}
console.log(rand(obj))  // usa valores do obj, pois tem min e max dentrod o objeto
console.log(rand(obj2)) //valores default, ou seja, considerar min = 0 e max =1000
console.log(rand({min: 955 }))



