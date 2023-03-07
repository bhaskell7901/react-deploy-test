function reverseNumber( num ) {
    var newNum = num.toString().split('').reverse().join('');
    return Number.parseInt( newNum );
}

console.log(reverseNumber(1234));