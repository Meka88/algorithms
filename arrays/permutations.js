//Given an array nums of distinct integers, return all the possible permutations. 
//You can return the answer in any order.

// var permute = function(nums) {
//     const permutations = [];
//     helper(nums, [], permutations);
//     return permutations;
// };

// function helper(nums, currentPerm, permutations) {
//     if(!nums.length && currentPerm.length) {
//         permutations.push(currentPerm);
//     } else {
//         for (let i = 0; i < nums.length; i++) {
//             const newArr = nums.slice(0, i).concat(nums.slice(i + 1));
//             const newPerm = currentPerm.concat([nums[i]]);
//             helper(newArr, newPerm, permutations);
//         }
//     }
// }

var permute = function(nums) {
    const permutations = [];
    helper(0, nums, permutations);
    return permutations;
}
function helper(i, nums, permutations) {
    if (i === nums.length - 1) {
        permutations.push(nums.slice());
    } else {
        for (let j = i; j < nums.length; j++) {
            swap(i, j, nums);
            helper(i + 1, nums, permutations);
            swap(i, j, nums);
        }
    }
}
function swap(i, j, nums) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}