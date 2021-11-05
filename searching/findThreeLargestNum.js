// Write a function that takes in an array of at least three integers and, without sorting
// the input array, returns a sorted array of the three largest integers in the array
// The function should return duplicate integers if necessary.

// SOLUTION #1
function findThreeLargestNumbers(array) {
    // Write your code here.
      const largestArray = [];
  
    for (i = 0; i < 3; i++) {
  
      const largest = Math.max(...array);
  
      const largestIdx = array.indexOf(Math.max(...array));
  
      largestArray.push(largest);
  
      array.splice(largestIdx, 1);
  
    }
  
    return largestArray.sort((a, b) => a - b);
  }
  
  // SOLUTION #2
  // O(n) time | O(1) space
  function findThreeLargestNumbers(array) {
    // Write your code here.
      const threeLargest = [null, null, null ];
      for(const num of array) {
          updateLargest(threeLargest, num);
      }
      return threeLargest;
  }
  
  function updateLargest(threeLargest, num) {
      if (threeLargest[2] === null || num > threeLargest[2]) {
          shiftAndUpdate(threeLargest, num, 2);
      } else if (threeLargest[1] === null || num > threeLargest[1]) {
          shiftAndUpdate(threeLargest, num, 1);
      } else if (threeLargest[0] === null || num > threeLargest[0]) {
          shiftAndUpdate(threeLargest, num, 0);
      }
  }
  
  function shiftAndUpdate(array, num, idx) {
      for (let i = 0; i <= idx; i++) {
          if (i === idx) {
              array[i] = num;
          } else {
              array[i] = array[i + 1];
          }
      }
  }


  console.log(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]));
  console.log(findThreeLargestNumbers([39, 58, 298, 35, 20, 3, 57]));
  console.log(findThreeLargestNumbers([8, 47, 3, 84, 2, 19, 20]));