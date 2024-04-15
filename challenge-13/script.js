var romanToInt = function (romanNumeral) {
    // Create a symbols Array and a values Array. The values in the same index of both values match
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    let result = "";

    // For every item inside the values Array, check if romanNumeral is bigger than it. 
    for (let i = 0; i < romanNumeral.length; i++) {
        console.log(symbols.indexOf(romanNumeral[i]));
    }

    return result;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
