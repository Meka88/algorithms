// the Fibonacci sequence is defined as follows: the first number of the sequence is 0,
// the second number is 1, and the nth number is the sum of the (n-1)th and (n-2)th 
// numbers. Write a function that takes in an integer n and returns the nth Fibonacci 
// number. IMPORTANT NOTE: the Fibonacci sequence is often defined with its first two
// numbers as F0 = 0 and F1 = 1. For the purpose of this question, the first Fibonacci
// number is F0; therefore, getNthFib(1) is equal to F0, getNthFib(2) is equal to F1, etc..

// SOLUTION #1
// recursion with memoization
// O(n) time || O(n) space 
function getNthFib(n) {
    const hashMap = {1: 0, 2: 1};
    if(n in hashMap) {
        return hashMap[n];
    } else {
        hashMap[n] = getNthFib(n - 1, hashMap) + getNthFib(n - 2, hashMap);
        return hashMap[n];
    }
}

// SOLUTION #2 Recursion
// O(2^n) time || O(n) space
function getNthFib(n) {
    if (n === 2) {
        return 1;
    } else if (n === 1) {
        return 0;
    } else {
        return getNthFib(n - 1) + getNthFib(n - 2);
    }
}

// SOLUTION #3 Iteration
// O(n) time || O(1) space
function getNthFib(n) {
    const lastTwo = [0, 1];
    let counter = 3;
    while (counter <= n) {
        const nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = nextFib;
        counter+=1;
    }
    return n > 1 ? lastTwo[1] : lastTwo[0];
}