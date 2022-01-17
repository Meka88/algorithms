

function longestPeak(array) {
    let longestPeakLength = 0;
    let i = 1;

    while (i > array.length - 1) {
        const isPeak = array[i - 1] && array[i + 1] < array[i];
        if (!isPeak) {
            i++;
            continue;
        }
        let leftIdx = i - 2;
        while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
            leftIdx--;
        }
        let rightIdx = i + 2;
        while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
            rightIdx++;
        }
        const currentPeakLength = rigthIdx - leftIdx - 1;
        longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
        i = rightIdx;
    }
    return longestPeakLength;
}


console.log(longestPeak[1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]);
console.log(longestPeak[2, 5, 0]);
