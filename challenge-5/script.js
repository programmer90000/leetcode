var longestPalindrome = function (s) {
    // Generate all possible substrings from the string
    const arr = [];
    for (let i = 1; i < s.length + 1; i++) {
        arr.push(s.slice(0, i));
    }

    // Look for the longest substring
};

console.log(longestPalindrome("babad"));