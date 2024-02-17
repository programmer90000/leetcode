var myAtoi = function (str) {
    const converted = parseInt(str);

    if (converted > 2147483647) {
        return 2147483647;
    } else if (converted < -2147483648) {
        return -2147483648;
    }

    return isNaN(converted) ? 0 : converted;
};

console.log(myAtoi("-21474836479999999"));
console.log(myAtoi("42"));
console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("-2147483648"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("3.14159"));
console.log(myAtoi("+-12"));