var myAtoi = function (s) {
    s = s.trim();

    let sign;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "-") {
            sign = "negative";
            break;
        } else {
            sign = "positive";
        }
    }

    return s;
};

console.log(myAtoi("42"));
console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with words"));