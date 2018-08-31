{{{{ var sera = 'Será ??'}}}}

{
  {
    {
      var sera2 = "Sera2??"
    }
  }
}

// mesmo fora do bloco, ela é visivel
console.log(sera)
console.log(sera2)

function teste() {
  var local = 123
}

teste()
// var é so visivel fora de outros blocos se não estiver dentro de uma funcao
//console.log(local) // não acessa, pois não está visivel fora do escopo function

