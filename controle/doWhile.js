function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min; 
  return Math.floor(valor)
}

let opcao = 0

do {
  opcao = getInteiroAleatorioEntre(-1, 100);
  console.log(`Opção escolhida..: ${opcao}.`)
} while (opcao != -1)