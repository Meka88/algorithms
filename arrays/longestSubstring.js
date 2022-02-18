//Given a string s, find the length of the longest substring without repeating characters.

// solution array

var lengthOfLongestSubstring = function(s) {
    // Initialise an array to store the running characters and a longest string length variable
    let arr = [];
    let longestStrLength = 0;
    // Loop through the provided string
    for(let i=0; i < s.length; i++) {
        // Attempt to get the current character's position in the current string
        const current = arr.indexOf(s[i]);
        // Check if the current character exists in the current string
        if(current !== -1) {
            // Chop the array off after the occurence of the character
            arr.splice(0,current + 1);
        }
        // Add the current character to the array
        arr.push(s[i]);
        // Store the current string length if bigger than the existing record
        longestStrLength = Math.max(longestStrLength, arr.length);
    }
    return longestStrLength;
};
// explanation of hashMap solution
// https://dev.to/codekagei/find-the-length-of-the-longest-substring-without-repeating-characters-javascript-solution-3g3i

var lengthOfLongestSubstring = function(s) {

    if(!!!s.length || typeof s !== 'string' ) return 0; //if our string is empty or 
                                                         //it's not a string, return 0
    if(s.length  == 1) return 1;//if the length is 1, return 1;

  let hashTable = {}; //our hashTable to hold our characters and index;
 let longestSubstringLength = 0; //length of longest substring
 let start = 0; //start index
 let length = s.length; //length of the array.

//convert our strings to an array;
  const strings = s.split('');


//iterate over the array
  for(let i = 0; i < length; i++) {
//if the character exist and the value of the character is greater or equal to our start index
      if(hashTable[strings[i]] !==undefined && hashTable[strings[i]] >= start) {
//change the value of start to one higher than the value of our current character 
          start = hashTable[strings[i]] + 1
      }
//add the current index and it's value to the hashTable
      hashTable[strings[i]] = i;
//find the length of the longest substring by comparing the value with 
//the value of the current index minus the start value plus 1
      longestSubstringLength = Math.max(longestSubstringLength, (i-start + 1))
  }

//return the longestSubstringLength as our final answer
return longestSubstringLength;
}