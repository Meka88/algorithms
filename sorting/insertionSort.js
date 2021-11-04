// Write a function that takes in an array of integers and returns a sorted version of that array. 
// Use the Insertion Sort algorithm to sort the array.
// best O(n) time | O(1) sapce
// average O(n^2) time | O(1) space
// worst O(n^2) time | O(1) space
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let j = i;
        while (j > 0 && array[j] < array[j - 1]) {
            swap(j, j - 1, array);
            j -= 1;
        }
    } 
    return array;
}

function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

console.log(array[8, 5, 2, 9, 5, 6, 3])