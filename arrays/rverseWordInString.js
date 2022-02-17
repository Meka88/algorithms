// Given a string s, reverse the order of characters in each word within 
// a sentence while still preserving whitespace and initial word order.

var reverseWords = function(s) {
    let reverseArr = s.split(" ").map(word => word.split("").reverse().join(""));
    return reverseArr.join(" ");
};

let s = "let's be friends";
reverseWords(s);