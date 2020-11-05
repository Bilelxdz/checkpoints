const isPalindrome = (string)  =>{
    if (string.length <= 1) {
        return true;
    }

    let [firstLetter] = string;
    let lastLetter = string[string.length - 1];

    if (firstLetter === lastLetter) {
        let stringWithoutFirstAndLastLetters = string.substring(
            1,
            string.length - 1
        );
        return isPalindrome(stringWithoutFirstAndLastLetters);
    } else {
        return false;
    }
}