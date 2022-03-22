// A sorted array of distinct integers shiftArr is shifted to the left by an unknown 
//offset and you don’t have a pre-shifted copy of it. For instance, 
//the sequence 1, 2, 3, 4, 5 becomes 3, 4, 5, 1, 2, after shifting it twice to the left.

// Given shiftArr and an integer num, implement a function shiftedArrSearch that finds 
//and returns the index of num in shiftArr. If num isn’t in shiftArr, return -1. 
//Assume that the offset can be any value between 0 and arr.length - 1.

// Explain your solution and analyze its time and space complexities.

function shiftedArrSearch(shiftArr, num) {
    // your code goes here
    return binarySearchHelper(shiftArr, num, 0, shiftArr.length - 1);
  }
  // recursive O(log(n)) time || O(log(n)) space because of recursive calls add frames at call stack
  function binarySearchHelper(shiftArr, num, left, right) {
    if(left > right) return -1; // base case
    const middle = Math.floor((left + right) / 2); // declare our middle pointer
    const potentialMatch = shiftArr[middle]; // number at middle index
    const leftNum = shiftArr[left]; // left num at left pointer 
    const rightNum = shiftArr[right];
    if(num === potentialMatch) {
      return middle;
    } else if(leftNum <= potentialMatch) {
      if(num < potentialMatch && num >= leftNum) { // num less than 
        return binarySearchHelper(shiftArr, num, left, middle -1); // exploring left side
      } else{
        return binarySearchHelper(shiftArr, num, middle + 1, right);// exploring right side
      }
    } else {
      if(num > potentialMatch && num <= rightNum) { // greater than 
        return binarySearchHelper(shiftArr, num, middle + 1, right);
      } else {
        return binarySearchHelper(shiftArr, num, left, middle - 1)
      }
    }
  }
  // iterative 
  function binarySearchHelper(shiftArr, num, left, right) {
    while(left <= right){
      const middle = Math.floor((left + right) / 2); // declare our middle pointer
      const potentialMatch = shiftArr[middle]; // number at middle index
      const leftNum = shiftArr[left]; // left num at left pointer 
      const rightNum = shiftArr[right];
      if(num === potentialMatch) {
        return middle;
      } else if(leftNum <= potentialMatch) {
        if(num < potentialMatch && num >= leftNum) { // num less than 
          right = middle - 1; 
        } else{
          left = middle + 1;
        }
      } else {
        if(num > potentialMatch && num <= rightNum) { // greater than 
          left = middle + 1;
        } else {
          right = middle - 1;
        }
      }
     }  
     return -1;
  }