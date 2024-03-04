var intToRoman = function (num) {
    const numberString = num.toString();
    let i = 1;
    const numberArray = [...numberString].map((digit => {
        return parseInt(digit);
    }));
    return numberArray;
};

console.log(intToRoman(123456789));