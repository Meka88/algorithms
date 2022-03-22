//Given an integer array nums, find the contiguous subarray (containing at least one number) 
//which has the largest sum and return its sum.

//A subarray is a contiguous part of an array.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23

var maxSubArray = function(nums) {

    let currentSum = 0; // sum for subarray we are currently tracking
    let max = -Infinity; // max found so far (defaulted to -Infinity so initial sum will always override)
    
    for(let i = 0; i< nums.length;i++) {
		// Should we keep adding to the subarray or start a new subarray?
		// Well...if the current number by itself is greater than the exisiting subarray sum
		// Then we know it would be better to start a new sub array here
        currentSum = Math.max(nums[i], currentSum + nums[i]);
		
		// Update max if new higher value found
        if(currentSum > max) max = currentSum;
    }
    return max;
};