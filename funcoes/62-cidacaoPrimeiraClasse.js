// funcao em js é first-class object (citizens)
// higher-order funcion

// criar de forma literal
function fun1() { }

// amarzer em uma varial
const fun2 = function() { }

// Armazenar em um array
const array = [function (a,b) { return a + b }, fun1, fun2]
console.log(array[0](2,3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() { return 'opa'}
console.log(obj.falar())

// passar uma funcao como param
function run(fun) {
  fun();
}
run(function() { 
  console.log('executando...')
})

// uma funcao pode retornar/conter uma outra função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c) //vai ter acesso a: a, b e c
  }
}

//   a b  c
soma(2, 3)(4) 
//ou, por partes
const cincoMais = soma(2, 3)  
cincoMais(4)

