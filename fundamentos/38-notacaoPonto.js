console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'bola2' //mesma instrução q acima
console.log(obj1.nome);


function Obj(nome) {
  //this torna o atributo nome publico
  this.nome = nome;
  this.exec = function() {
    console.log('Exec...')
  }
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)

obj3.exec()






