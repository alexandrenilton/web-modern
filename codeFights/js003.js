function checkPalindrome(inputString) {
    const input = inputString.toLowerCase();
    const inputReverse = input.split('').reverse().join('');
    
    const qtd = input.length;
    
    if (qtd > 1) {
        let half = qtd/2;

        half = Math.round(half);
        let beginStr, endStr;

        if ( (qtd%2) != 0) {
            half--;
            beginStr = input.substring(0, (half));
            endStr = input.substring(++half, qtd).split('').reverse().join('');
        } else {
            beginStr = input.substring(0, (half));
            endStr = input.substring(half, qtd).split('').reverse().join('');
        }

        console.log(beginStr, endStr)

        if (beginStr == endStr){
            return true;
        } else {
            return false;
        }
    }

    if (qtd == 1) {
        return true;
    } 
    
}


let test1 = checkPalindrome("aabaa");
console.log(test1)
let test2 = checkPalindrome("abac");
console.log(test2)