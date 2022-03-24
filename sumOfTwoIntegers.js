// Given two integers a and b, return the sum of the two integers without using the operators + and -;
//Example 1:

// Input: a = 1, b = 2
// Output: 3
// Example 2:

// Input: a = 2, b = 3
// Output: 5

var getSum = function (a, b) {
  let arr = [];
  let answer = 0;

  if ((a >= 0 && b >= 0) || (a < 0 && b < 0)) {
    for (let i = 0; i < Math.abs(a); i++) {
      arr.push(0);
    }

    for (let i = 0; i < Math.abs(b); i++) {
      arr.push(0);
    }

    answer = arr.length;
    if (a < 0 && b < 0) {
      answer = -answer;
    }
  } else {
    let max = Math.max(Math.abs(a), Math.abs(b));
    let min = Math.min(Math.abs(a), Math.abs(b));

    for (let i = 0; i < max; i++) {
      arr.push(0);
    }

    for (let i = 0; i < min; i++) {
      arr.shift();
    }

    answer = arr.length;
    if (-max === a || -max === b) {
      answer = -answer;
    }
  }

  return answer;
};
