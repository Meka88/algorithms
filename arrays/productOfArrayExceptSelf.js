// Given an integer array nums, return an array answer such that answer[i] is equal 
//to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]



var productExceptSelf = function(nums) {
    const output = [];

    // we will update this as we traverse through left to right
    let leftProduct = 1;
    
    // traverse nums in reverse to build up right side products
    for (let i = nums.length - 1; i >= 0; i--) {
        // store right side products in the output array so we don't create additional space
        output[i] = nums[i] * (output[i + 1] ?? 1)
    } 
    
	// traverse nums in left-right order
    for (let i = 0; i < nums.length; i++) {
        // multiply left side product by right side product (stored in output)
        output[i] = leftProduct * (output[i+1] ?? 1)
	    // update our left side product
        leftProduct = nums[i] * leftProduct;
    }
    
    return output;  
};