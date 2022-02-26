// Given a non-empty array of integers nums, every element appears twice except for one. 
//Find that single one.

//You must implement a solution with a linear runtime complexity and use only constant 
//extra space.

var singleNumber = function(nums) {
    for (let i = 0; i < nums.length; i++) {
    if (i === nums.lastIndexOf(nums[i])) {
      return nums[i];
    } else {
      nums.splice(nums.lastIndexOf(nums[i]), 1);
    }
  }
};