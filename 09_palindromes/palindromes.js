const palindromes = function (string) {
    const regex = /[^\w]/g;  //regex pattern that isolates letters
    const simpleString = string.toLowerCase().replace(regex, '');  //replaces matched characters with an empty string
    let palindrome = "";
    for(let i=simpleString.length-1; i >= 0; i--) {
        palindrome = palindrome + simpleString.charAt(i);
    }
    return palindrome === simpleString;
};

// Do not edit below this line
module.exports = palindromes;
