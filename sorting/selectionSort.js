// Write a function that takes in an array of integers and returns a sorted version of that array. 
// Use the Selection Sort algorithm to sort the array


function selectionSort(array) {
    for(let i = 0; i < array.length; i++) {
        let smallest = i;
        for(let j = i + 1; j < array.length; j ++) {
            if(array[j] < array[smallest]) {
                smallest = j;
            }
        }
        if(i !== smallest) {
            // swap
            let temp = array[i];
            array[i] = array[smallest];
            array[smallest] = temp;
        }    
    }
    return array;
}

console.log(array[8, 5, 2, 9, 5, 6, 3]);