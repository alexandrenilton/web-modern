var numero = 1 
{
  var numero = 2 //sobrescreveu no global
  console.log('dentro => ', numero)
}

console.log('fora =>', numero)