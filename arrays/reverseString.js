//Write a function that reverses a string. 
//The input string is given as an array of characters s.

//You must do this by modifying the input array in-place with O(1) extra memory.
// O(n) time || O(1) space
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        
        left++;
        right--;
    }
};

