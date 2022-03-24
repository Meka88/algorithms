// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

var missingNumber = function (nums = []) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  nums.forEach((num) => {
    min = Math.min(num, min);
    max = Math.max(num, max);
    sum += num;
  });
  const result = (nums.length * (nums.length + 1)) / 2 - sum;

  return result;
};
