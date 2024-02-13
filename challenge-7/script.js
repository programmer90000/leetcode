var reverse = function (x) {
    if (typeof x === "number") {
        const max = Math.pow(2, 31);
        const min = Math.pow(-2, 31);
        const reversedNum = parseFloat(x.toString().split("").reverse().join("")) * Math.sign(x);
        if (reversedNum > max || reversedNum < min) {
            return 0;
        }
        return reversedNum;
    }
};

console.log(reverse(1534236469));