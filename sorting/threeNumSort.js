// You are given an array of integers and another array of three distinct integers.
// The first array is guaranteed to only conmtain integers that are in the second array,
// and the second array represents a desired order for the integers in the first array.
// Write a function that sorts the first array according to the desired order in the second 
// array. The function should perform this in place, and it shouldn't use auxiliary space(O(1) space)
// Note: the desired order won't necessarily be ascending or descending and that the first
// array won't necessarly contain all three integers found in the second array - it might 
// only contain one or two.

// SOLUTION #1
// O(n) time | O(1) space where n is the length of the array

function threeNumSort (array, order) {
    const firstValue = order[0];
    const secondValue = order[1];

    let firstIdx = 0;
    let secondIdx = 0;
    let thirdIdx = array.length - 1;

    while(secondIdx <= thirdIdx) {
        const value = array[secondIdx];
        
        if(value === firstValue) {
            swap(firstIdx, secondIdx, array);
            firstIdx++;
            secondIdx++;
        } else if (value === secondValue) {
            secondIdx -= 1;
        } else {
            swap (secondIdx. thirdIdx, array);
            thirdIdx -=1;
        }
    }
    return array;
}

const swap = (i, j, array) => {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

console.log(threeNumSort(array[1,0,0,-1,-1,0,1,1], order[0,1,-1]));

// SOLUTION 2
// O(n) time | O(1) space
function threeNumSort(array, order) {
    const valueCounts = [0, 0, 0];

    for (const element of array) {
        const orderIdx = order.indexOf(element);
        valueCounts[orderIdx]++;
    }

    for (let idx = 0; idx < 3; idx++) {
        const value = order[idx];
        const count = valueCounts[idx];

        const numElementsBefore = valueCounts.slice(0, idx).reduce((a, b) => a + b, 0);
        for (let n = 0; n < count; n ++) {
            const currentIdx = numElementsBefore + n;
            array[currentIdx] = value;
        }
    }
     return array;
}

// Solution 3
// O(n) time | O(1) space

function threeNumSort(array, order) {
    const firstValue = order[0];
    const thirdValue = order[2];

    let firstIdx = 0;
    for (let idx = 0; idx < array.length; idx++) {
        if (array[idx] === firstValue) {
            swap(firstIdx, idx, array);
            firstIdx++;
        }
    }

    let thirdIdx = array.length - 1;
    for (let idx = array.length - 1; idx > -1; idx--) {
        if (array[idx] === thirdValue) {
            swap(thirdIdx, idx, array);
            thirdIdx--;
        }
    }
    return array;
}

function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}