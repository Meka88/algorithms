//Given an integer array nums, move all 0's to the end of it while maintaining 
//the relative order of the non-zero elements.

//Note that you must do this in-place without making a copy of the array.


var moveZeroes = function(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
     nums[i] === 0 && nums.splice(i, 1) && nums.push(0);
   }

    
    // let zeros = 0
    // for (let i = 0; i < nums.length; i++) {
    // let isZero = nums[i] === 0
    //   if (isZero){
    //     zeros++
    //     nums.splice(i, 1)
    //     i--
    //   }
    // }
    // for (let i = 0; i < zeros; i++){
    //    nums.push(0)
    // }
     return nums
   };


let nums = [0,1,0,3,12];
moveZeroes(nums);  