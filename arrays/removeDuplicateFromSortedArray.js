// Given an integer array nums sorted in non-decreasing order, 
//remove the duplicates in-place such that each unique element appears only once. 
//The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, 
//you must instead have the result be placed in the first part of the array nums. 
//More formally, if there are k elements after removing the duplicates, then the 
//first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// O(n) time || O(1) space
const removeDuplicates = function(nums) {
    if(nums.length === 0) return 0; // edge case if array is empty
    let i = 0; // first pointer at first element
    let j = 1; // second pointer at the second element
    while(j < nums.length) { // loop if index j is equal to index i
        if(nums[j] !== nums[i]) { // if the number with index j is equal to the number with index i   
            i++; // If not, increment i by 1
            nums[i] = nums[j]; // and copy the value of the number with index j to the element at the index i
            j++; // and then increment j by 1.
        } else { //If they are equal, increment j to skip the duplicate
            j++
        }
    }
    return i + 1; // After the loop finishes, return the length of the unique numbers, which equals to i + 1
}

// solution #2 
var removeDuplicates1 = function (nums) {
    // Length of the updated array
    let count = 0;
    // Loop for all the elements in the array
    for (let i = 0; i < nums.length; i++) {
        // If the current element is equal to the next element, we skip
        if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
            continue;
        }
        // We will update the array in place
        nums[count] = nums[i];
        count++;
    }
    return count;
};