//iven an integer array nums, return true if any value appears at least twice in the array, 
//and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false

var conatinsDuplicate = function(nums) {
    if(nums.length <= 1) {
        return false;
    }

    let hashMap = {};
    for(let i = 0; i < nums.length; i++) {
        if(hashMap[nums[i]] !== undefined) {
            return true;
        } else {
            hashMap[nums[i]] = 1;
        }
    }
    return false;
}