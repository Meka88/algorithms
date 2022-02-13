// Given an array of integers nums which is sorted in ascending order, 
//and an integer target, write a function to search target in nums. 
//If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// O(log(n)) time || O(1) space 
var search = function(nums, target) {
    
    return binarySearchHelper(nums, target, 0, nums.length-1);
    
};

function binarySearchHelper (nums, target, left, right) {
    while(left <= right) {
        const middle = Math.floor((left + right) / 2);
        const potentialMatch = nums[middle];
        if (target === potentialMatch){
            return middle;
        } else if (target < potentialMatch) {
            right = middle -1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
}

let arr = [-1,0,3,5,9,12];
search(arr, 9);
