// write a function that takes in non-empty array of integers that are sorted in ascending order
// and returns a new array of the same length with the square of the original integers also sorted
// in ascending order. 

//explanation
// https://karanchauhan16.medium.com/squares-of-a-sorted-array-in-javascript-95b1efe5df81

// O(n) time || O(n) space 
// solution #1
function sortedSquaredArray(array) {
    let result = [];
    let pointerStart = 0;
    let pointerEnd = array.length - 1;

    for (let i = 0; i < array.length; i++) {
        if(Math.abs(array[pointerStart]) > Math.abs(array[pointerEnd])) {
            result.unshift(Math.pow(array[pointerStart], 2));
            pointerStart ++;
        } else {
            result.unshift(Math.pow(array[pointerEnd], 2));
            pointerEnd --;
        }
    }
    return result;
}
let array = [1, 2, 3, 4, 5, 6];
sortedSquaredArray(array);

// solution #2
// O(nlogn) time || O(n) space 
function sortedSqArray(array1) {
    const sortedSquare = new Array(array1.length).fill(0);

    for(let idx = 0; idx < array1.length; idx++){
        const value = array1[idx];
        sortedSquare[idx] = value * value;
    }
    sortedSquare.sort((a, b) => a - b);
    return sortedSquare;
}

sortedSqArray([8, 7, 6, 5, 4, 3, 2, 1]);
sortedSqArray([8, 3, 6, 5, 11, 2, 1]);
sortedSqArray([3, 7, 4, 5, 4, 9, 2, 1]);