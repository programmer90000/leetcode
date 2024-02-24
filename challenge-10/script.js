const isMatch = (s, p) => {
    // If the pattern is empty, return true when the string is false and false when the string is true
    if (!p) {
        return !s;
    }

    // Check if the current character of the string and pattern match
    const hasFirstCharMatch = Boolean(s) && (p[0] === '.' || p[0] === s[0]);

    // Look for the next character * is next in line in the pattern
    if (p[1] === '*') {
        return (
            isMatch(s, p.slice(2)) ||
            (hasFirstCharMatch && isMatch(s.slice(1), p))
        );
    }

    return hasFirstCharMatch ? isMatch(s.slice(1), p.slice(1)) : false;
};

console.log(isMatch("aa", "a"));
console.log(isMatch("aa", "a*"));
console.log(isMatch("ab", ".*"));