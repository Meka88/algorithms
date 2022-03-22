// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot 
//index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., 
//nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, 
//[0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index 
//of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1



// binary search tree 
var search = function(nums, target) {
    let left = 0;
    let right = nums.length -1;
  
    while(left <= right) {
	    // seperate down the middle into two arrays
		//   1. [left, ..., mid] 
		//   2. [mid, ..., right]
        const mid = Math.floor((right + left) / 2);
		
		// if target at current position, target is found
        if(nums[mid] === target) return mid;
		
		// otherwise, in a typical binary search, we should
		// refine our left and right pointers to further pin
		// down our target's position
        
        // at least one side must be sorted
        // search against known sorted array
        if(nums[mid] >= nums[left]) {
            // left side is sorted ( [left, ..., mid] )
            
            // see if target is within range of [left-mid]
            if(nums[left] <= target && target < nums[mid]) {
                // change range to focus on [left-mid]
                right = mid -1;
            } else {
                // change range to focus on [mid-right]
                left = mid +1;
            }
        } else {
            // right must be sorted ( [mid, ..., right])
            
            // see if target is within range of [mid-right]
            if(target > nums[mid] && target <= nums[right]) {
                // change range to focus on [mid-right]
                left = mid + 1;
            } else {
                right = mid -1;
            }
        }
    }
    
	// if nothing found during search, return -1
    return -1;
    
};