var isPalindrome = function (x) {
    const numberAsString = x.toString();
    const originalString = numberAsString.split("");
    let newString = originalString.reverse();
    newString = newString.join("");
    console.log(newString);
};

isPalindrome(121);