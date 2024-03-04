var intToRoman = function (num) {
    const numberString = num.toString();
    const newNumberArray = [];
    const numberArray = [...numberString].map((digit => {
        return parseInt(digit);
    }));

    let multiplication = 1;

    for (let i = numberArray.length - 1; i >= 0; i--) {
        let nums = numberArray[i] * multiplication;
        multiplication = multiplication * 10;
        newNumberArray.push(nums);
    }

    return newNumberArray;
};

console.log(intToRoman(123456789));