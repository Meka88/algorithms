// Write a function that takes in an array of in tegers and returns a sorted version
// of that array. Use the Bubble Sort algorithm to sort the array.

function bubbleSort(array) {
    for(let i = array.length - 1; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            if(array[j] > array[j+1]) {
                // swap
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

console.log(array[8, 5, 2, 9, 5, 6, 3]);