var intToRoman = function (num) {
    const numberString = num.toString();
    const numberArray = [...numberString].map((digit => parseInt(digit)));
    console.log(numberArray);
};

intToRoman(123456789);