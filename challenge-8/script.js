var myAtoi = function (s) {
    let negative;

    s = s.trim();

    // Remove any characters after the dot
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ".") {
            s = s.slice(0, i);
        }
    }

    // Remove any 0's at the beginging of the string
    while (s[0] === "0") {
        s = s.substring(1)
    }

    // Check of there is a -
    if (s[0] === "-") {
        negative = true;
    }

    // Check if the number is valid
    if ((!Number(s[0])) && (s[0] !== "-") && (s[0] !== "+")) {
        return 0;
    }

    // Turn the string into a number
    s = s.replace(/\D/g, "");
    s = Number(s);

    // If the number is negative, add a - sign
    if (negative) {
        s = s * -1;
    }

    // If the number is too big or too small, make it the correct size
    if (s > Math.pow(2, 31) - 1) {
        s = Math.pow(2, 31) - 1;
    }
    if (s < Math.pow(-2, 31)) {
        s = Math.pow(-2, 31);
    }

    return s;
};

console.log(myAtoi("-21474836479999999"));
console.log(myAtoi("42"));
console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("-2147483648"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("3.14159"));
console.log(myAtoi("+-12"));