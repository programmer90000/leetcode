var lengthOfLongestSubstring = function (s) {
    let currentString = [];
    let longestStringLength = 0;

    for (let i = 0; i < s.length; i++) {
        // Get the current character's position in the current string
        const currentCharacterPosition = currentString.indexOf(s[i]);

        // Check if the current character exists in the current string
        if (currentCharacterPosition !== -1) {
            // Splice the array after the occurence of the character
            currentString.splice(0, currentCharacterPosition + 1);
        }

        // Add the current character to the array
        currentString.push(s[i]);

        // Store the current string length if bigger than the existing record
        longestStringLength = Math.max(
            longestStringLength,
            currentString.length
        );
    }

    return longestStringLength;
};
