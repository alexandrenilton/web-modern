// function declaration => pode ser declarada antes ou depois de ser usada
function soma(x, y) {
    return x + y
}

// function expression => deve ser declarada antes de ser usada
const sub = function (x, y) {
    return x - y
}
console.log(sub(4,3))

// named function expression =>? deve ser declarada antes de ser usada
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))

