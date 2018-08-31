const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c} }
console.log(JSON.stringify(obj)) // funcao foi excluída no json, pq ele so guarda dados..


console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{"a": 1.8, "b": "string qualquer", "c": true, "d": {}, "e": [] }'))



