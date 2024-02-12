var convert = function (s, numRows) {
    const len = s.length;
    const num = 2 * (numRows - 1);
    const res = Array(numRows).fill('');

    if (s.length <= numRows || numRows < 2) {
        return s;
    }

    for (let i = 0; i < len; i++) {
        const tmp = i % num;
        if (tmp < numRows) {
            res[tmp] += s[i];
        } else {
            res[num - tmp] += s[i];
        }
    }

    return res.join('');
};

console.log(convert("PAYPALISHIRING", 3));