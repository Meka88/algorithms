// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// O(log(n)) time || O(1) space
// Binary Search
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length
    while(left < right) {
        const mid = Math.floor((left + right) / 2); //left + Math.floor((right - left) / 2)
        if(nums[mid]===target) {
           return mid
        } else if(nums[mid] > target){
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
};
let arr = [1,3,4,5]
searchInsert(arr, 2);

