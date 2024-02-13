var reverse = function (x) {
    if (typeof x === "number") {
        if (x > 2147483648 || x < -2147483648) {
            return 0;
        } else {
            const reversedNum = parseFloat(x.toString().split("").reverse().join("")) * Math.sign(x);
            return reversedNum;
        }

    }
};

console.log(reverse(-12345));