// write a function that takes in a non-empty array of distinct integers and 
// an integer representing a target sum. The function should find all triplets
// in the array that sum up to the target sum and return a two-dimensional array
// of all these triplets. The numbers in each triplet should be ordered in ascending
// order, and the triplets themselves should be ordered in ascending order with 
// respect to the numbers they hold.
// If no three numbers sum up to the target sum, the function should return an empty array.

// O(n^2) time | O(n) space
function threeNumberSum(array, targetSum) {
    array.sort((a,b) => a -b);
    const triplets = [];
    for (let i = 0; i < array.length-2; i++) {
        let left = i + 1;
        let right = array.length - 1;
        while (left < right) {
            const currentNum = array[i] + array[left] + array[right];
            if (currentSum === targetSum) {
                triplets.push ([array[i], array[left], array[right]]);
                left++;
                right--;
            } else if (currentSum < targetSum) {
                left++;
            } else if (currentSum > targetSum) {
                right--;
            }
        }
    }
    return triplets;
} 

console.log(threeNumberSum[12, 3, 1, 2, -6, 5, -8, 6], 0);
