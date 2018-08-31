// não aceita repeticao/não indexada

const times = new Set()
times.add('Barcelona')
times.add('Bayer').add('Nuremberg').add('Fiorentina').add('Servilla').add('Real Madrid').add('Barcelona')

console.log(times)
console.log(times.size)
console.log(times.has("barcelona"))
console.log(times.has('Barcelona'))

times.delete('Bayer')
console.log(times.has('Bayer'))