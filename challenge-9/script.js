var isPalindrome = function (x) {
    const numberAsString = x.toString();
    const originalString = numberAsString.split("");
    let newString = originalString.reverse();
    newString = newString.join("");
    console.log(newString);

    if (numberAsString === newString) {
        return true;
    }
    else {
        return false;
    }
};

isPalindrome(121);