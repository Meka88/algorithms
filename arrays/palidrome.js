// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.
// Follow up: Could you solve it without converting the integer to a string?

// explanation https://dev.to/elisabethdiang/leetcode-palindrome-number-w-fun-javascript-mathematical-approach-1obi

var isPalindrome = function(x) {
    if (x < 0) return false // edge case if number is less than 0 return false

    let reversed = 0; 
    let y = x;

    while (y > 0) {
        const lastDigit = y % 10
        reversed = (reversed * 10) + lastDigit
        y = (y / 10) | 0
    }
    return x === reversed
};