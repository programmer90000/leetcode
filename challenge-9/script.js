var isPalindrome = function (x) {
    let originalString = x.split("");
    let newString = originalString.reverse();
    newString = newString.join("");
    console.log(newString);
};

isPalindrome("Hello");