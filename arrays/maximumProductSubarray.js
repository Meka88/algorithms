//Given an integer array nums, find a contiguous non-empty subarray within the array 
//that has the largest product, and return the product.

//The test cases are generated so that the answer will fit in a 32-bit integer.

//A subarray is a contiguous subsequence of the array.

 

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

// Constraints:

// 1 <= nums.length <= 2 * 104
// -10 <= nums[i] <= 10
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

var maxProduct = function(nums) {
    let [currentMax, currentMin] = [1, 1];
    let output = Math.max(...nums);
    for(let i in nums) {
        let temp = currentMax;
        currentMax = Math.max(nums[i] * currentMax, nums[i] * currentMin, nums[i]);
        currentMin = Math.min(temp * nums[i], nums[i] * currentMin, nums[i]);
        output = Math.max(output, currentMin, currentMax); 
    }
    return output;
}
// Maintain 2 variables currentMax and currentMin initially set to 1 
// (not 0 because we don't want to multiply by 0) and set the output to be 
// that max value of the nums input array. Loop through the array and store 
// the currentMax in a temp variable then set the currentMax to be the max between currentmin,
// currentmax and current. Do the opposite for currentMin then set the output to be the max 
// between itself, the currentMax and the currentMin and voilà!