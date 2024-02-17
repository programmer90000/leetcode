var myAtoi = function (s) {
    let negative;

    s = s.trim();

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ".") {
            s = s.slice(0, i);
        }
    }

    while (s[0] === "0") {
        s = s.substring(1)
    }

    if (s[0] === "-") {
        negative = true;
    }

    if ((!Number(s[0])) && (s[0] !== "-") && (s[0] !== "+")) {
        return 0;
    }

    s = s.replace(/\D/g, "");
    s = Number(s);

    if (negative) {
        s = s * -1;

    }
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