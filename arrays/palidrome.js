// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.
// Follow up: Could you solve it without converting the integer to a string?

// explanation https://dev.to/elisabethdiang/leetcode-palindrome-number-w-fun-javascript-mathematical-approach-1obi
// O(lenX) time || O(1) space
var isPalindrome = function(x) {
    const isNegative = x< 0 ? true : false; // edge case if number is less than 0 return false
    if (isNegative){
        return false;
    }
      
    let reversed = 0; // initialize our reversed var to 0
    let y = x; // store our x in temporary variable

    while (x > 0) { // loop over till its less than or equal to zero
        const lastDigit = x % 10 // store our last digit with modulus of 10
        reversed = (reversed * 10) + lastDigit // multiply reversed to 10 and add last digit
        x = (x / 10) | 0 // 
    }
    return reversed === y
};

// explanation https://rishabh1403.com/posts/coding/leetcode/2019/12/leetcode-solution-of-palindrome-number-in-javascript
// string method
var isPalindrome = function(x) { // convert to string=> create a character array => revrse it
    return x == x.toString().split('').reverse().join(''); // => join back to a stcing => check if it equal 
  };

