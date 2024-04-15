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
    let i = 0;

    while (i < romanNumeral.length) {
        // If the Roman Numeral is 2 digits long
        if (i + 1 < romanNumeral.length && romanNumeral[i] + romanNumeral[i + 1] in romanToIntMap) {
            result += romanToIntMap[romanNumeral[i] + romanNumeral[i + 1]];
            i += 2;
        }
        // If the Roman Numeral is 1 digit long
        else {
            result += romanToIntMap[romanNumeral[i]];
            i++;
        }
    }

    return result;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
