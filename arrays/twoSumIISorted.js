//Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
// find two numbers such that they add up to a specific target number. 
//Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

//Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
// O(n) time || O(n) space
var twoSum = function(numbers, target) {
    // start a pointer on each end of the array
    let left = 0;
    let right = numbers.length - 1;
    while(left < right) {
        const current = numbers[left] + numbers[right];
        if(current === target) {
            break;
        } else if (current > target) {
            right--;
        } else {
            left++;
        }
    }
    return [left + 1, right + 1]; 
    
//     // hashMap solution
//     let hashMap = new Map;
//     for(let i = 0; i < numbers.length; i++) {
//         let diff = target - numbers[i];
//         if(hashMap.has(diff)) {
//             return [hashMap.get(diff), i + 1];
//         }
//         hashMap.set(numbers[i], i + 1);
//     }
};

let numbers = [2,7,11,15];
twoSum(numbers, 9);