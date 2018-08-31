const aprovados = ['Alexandre', 'Agatha', 'Cecilia', 'Lais', 'Patricia']

aprovados.forEach(function(element, index) {
    console.log(`${index + 1}) ${element}`)
})

aprovados.forEach(nome => console.log(nome))

aprovados.forEach( (nome, index, other) => console.log(`avec other; ${index} - ${nome} - ${other}`))

const exibirAprovado = (aprovado_str, index) => console.log(`${index + 1}) ${aprovado_str}`)
aprovados.forEach(exibirAprovado)
