var intToRoman = function (num) {
    for (let i = num.toString().length - 1; i >= 0; i--) {
        console.log(num.toString()[i]);
    }
};

intToRoman(123456789);