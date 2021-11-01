// write a function that takes in a non-empty array of distinct integers and 
// an integer representing a target sum. If any two numbers
// in the input array sum up to the target sum, the function
// should return them in an array, in any order. If no two numbers 
// sum up to the target sum, the function should return an empty array.
// Note: target sum has to be the sum of two different integers
// in the array, you can't add single integer itself.
// You can assume there will be at least one pair of numbers

// 1 solution
// O(n) time || O(n) space
function twoNumberSum(array, targetSum) {
    const nums = {}; // created hashMap, put key and value from array
    for (const num of array) { // iterating through array, finding x
        const neededNum = targetSum - num; // finding y
        if (nums[neededNum]) {
            return [neededNum, num];
        } else {
            nums[num] = true; // store in a hashMap
        }
    }
    return []; 
}
 
// 2 solution
// O(nlog(n)) time|| O(1) space
function twoNumberSum(array, targetSum) {
    array.sort((x, y) => x-y); // sort array
    let num1 = 0; // index where we start iterating, first num
    let num2 = array.length - 1; // index of last number
    while (num1 < num2) {
        const currentNum = array[num1] + array[num2];
        if (currentNum === targetSum) {
            return [array[num1], array[num2]];
        } else if (currentNum < targetSum) {
            num1+=1;
        } else if (currentNum > targetSum) {
            num2-=1;
        }
    }
    return [];
}

// 3 solution
// O(n^2) time || O(1) space
function twoNumberSum(array, targetSum) {
    for (let i = 0; i < array.length - 1; i++) {
        const firstNum = array[i];
        for (let j = i + 1; j < array.length; j++) {
            const secondNum = array[j];
            if (firstNum + secondNum === targetSum) {
                return [firstNum, secondNum];
            }
        }
    }
    return [];
}


console.log(twoNumberSum[3, 4, 5, 2, 6, 7, 8], 7);

