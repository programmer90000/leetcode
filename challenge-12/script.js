var intToRoman = function (num) {
    const numberString = num.toString();
    const newNumberArray = [];
    const numberArray = [...numberString].map((digit => {
        return parseInt(digit);
    }));

    for (let i = numberArray.length - 1; i >= 0; i--) {
        newNumberArray.push(numberArray[i]);
    }

    return newNumberArray;
};

console.log(intToRoman(123456789));