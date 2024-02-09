function longestPalindrome(string) {
    const lengthOfString = string.length;
    const result = [];

    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < lengthOfString && string[left] === string[right]) {
            result.push(string.substring(left, right + 1));
            left--;
            right++;
        }
    };

    for (let i = 0; i < lengthOfString; i++) {
        expandAroundCenter(i, i);
    }

    for (let i = 0; i < lengthOfString - 1; i++) {
        expandAroundCenter(i, i + 1);
    }

    let longestValue = result.reduce(
        function (a, b) {
            return a.length > b.length ? a : b;
        }
    )

    return longestValue;
}

console.log(longestPalindrome("babad"));