var intToRoman = function (num) {
    // Create a symbols Array and a values Array. The values in the same index of both values match
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    let result = "";

    // For every item inside the values Array, check if num is bigger than it. 
    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            result += symbols[i];
            num -= values[i];
        }
    }

    return result;
};

console.log(intToRoman(3));
console.log(intToRoman(58));
console.log(intToRoman(1994));