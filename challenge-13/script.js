var romanToInt = function (romanNumeral) {
    const romanToIntMap = {
        'I': 1,
        'IV': 4,
        'V': 5,
        'IX': 9,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000
    };

    let result = 0;

    // For every item inside the values Array, check if romanNumeral is bigger than it. 
    for (let i = 0; i < romanNumeral.length; i++) {
        const symbolIndex = symbols.indexOf(romanNumeral[i]);
        result += values[symbolIndex];
    }

    return result;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
