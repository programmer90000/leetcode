var myAtoi = function (s) {
    s = s.trim();

    let sign = 1;
    let result = 0;

    // Check if the number is positive or negative
    if (s[0] === "-" || s === "+") {
        sign = s[0] === "-" ? -1 : 1;
        s = s.slice(1);
    }

    // Get the integer
    for (const char of s) {
        if (!/\d/.test(char)) break;
        const digit = parseInt(char, 10);

        if (result > Math.pow(2, 31) / 10 || (result === Math.pow(2, 31) / 10 && digit > 7)) {
            return sign === 1 ? Math.pow(2, 31) - 1 : -Math.pow(2, 31);
        }

        result = result * 10 + digit;
    }

    return result * sign;
};

console.log(myAtoi("42"));
console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with words"));