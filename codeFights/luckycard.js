
function checkLuckyNumber(n) {
    let numStr = n+'';
    let firstHalf = numStr.substr(0, (numStr.length/2))
    let lastHalf = numStr.substr( (numStr.length/2), numStr.length)


    if ( getSum(firstHalf) == getSum(lastHalf)) {
        console.log('Lucky number')
    } else {
        console.log('is not a lucky number')
    }
}

function getSum(numStr) {
    
    let array = numStr.split('');
    
    let sum = 0;
    array.forEach(element => {
        sum += parseInt(element)
    });

    return sum;
}

let teste01 = 1230

console.log('teste 1') 
checkLuckyNumber(teste01)
console.log('teste 2') 
checkLuckyNumber(239017)
console.log('teste 3') 
checkLuckyNumber(134008)
console.log('teste 4') 
checkLuckyNumber(10)
console.log('teste 5') 
checkLuckyNumber(11)
console.log('teste 6') 
checkLuckyNumber(1010)
console.log('teste 7') 
checkLuckyNumber(261534)
console.log('teste 8') 
checkLuckyNumber(100000)
console.log('teste 9') 
checkLuckyNumber(999999)
console.log('teste 10') 
checkLuckyNumber(123321)


