//Suppose an array of length n sorted in ascending order is rotated between 1 and n times. 
//For example, the array nums = [0,1,2,4,5,6,7] might become:

//[4,5,6,7,0,1,2] if it was rotated 4 times.
//[0,1,2,4,5,6,7] if it was rotated 7 times.
//Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in 
//the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

//Given the sorted rotated array nums of unique elements, return the minimum element of this array.

//You must write an algorithm that runs in O(log n) time.

 

// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.
// Example 2:

// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

// Time Complexity : O(log(n))
// Space Complexity: O(1)
// Binary Search 
var findMin = function(nums) {
    let left = 0, right = nums.length-1;
    while(left < right) {
        const mid = left + Math.floor((right-left)/2)
        // Move right pointer if num at mid is less than or equal to num at right. This means that the smallest number must be on the left side of mid including mid.
        if(nums[right] >= nums[mid]) {
            right = mid
        } else {
            left = mid+1
        }
    }
    return nums[left];
    //     let left = 0
//     let right = nums.length - 1
  
//   while (left <= right) {
//     let middle = Math.floor((left + right) / 2)

//     if (middle === nums.length - 1) return nums[0] //if list is sorted ascending order and the lowest element is at the very beginning

//     if (nums[middle + 1] < nums[middle]) { //if the middle is the greatest element, means that the next element is the least
//       return nums[middle + 1]

//     } else if (nums[middle + 1] > nums[middle] && nums[middle - 1] > nums[middle]) { // if previous and next elements are both greater, then middle is the least
//       return nums[middle]
//     }

//     if(nums[middle] < nums[left] && nums[middle] < nums[right]) { 
//       right = middle - 1

//     } else if (nums[middle + 1] && nums[middle + 1] > nums[middle]) {
//       left = middle + 1
//     }
//   }  
};