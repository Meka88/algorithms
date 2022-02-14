// Given an array, 
//rotate the array to the right by k steps, where k is non-negative.

var rotate = function(nums, k) {
    /* pop and unshift methods*/
 // let i = 0;
 // while(i < k) {
 //     nums.unshift(nums.pop());
 //     i++;
 // }
 // return nums;
 
    /* splice method*/
 // let i = 0;
 // while(i < k) {
 //     nums.unshift(nums.splice(-1,));
 //     i++;
 // }
 // return nums;
 
     /* optimized solution */
 if(nums.length > k) {
     nums.unshift(...nums.splice(-k));
 } else {
     let i = 0;
     while (i < k) {
         nums.unshift(nums.splice(-1));
         i++;
     }
 }
 return nums;
};

let nums = [1,2,3,4,5,6,7];
rotate(nums, 3);