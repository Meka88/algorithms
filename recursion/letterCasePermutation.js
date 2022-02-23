//Given a string s, you can transform every letter individually to be 
//lowercase or uppercase to create another string.

//Return a list of all possible strings we could create. Return the output in any order.
// explanation
// https://dev.to/seanpgallivan/solution-letter-case-permutation-5dgn
var letterCasePermutation = function(s) {
    s = s.toLowerCase();
    let answer = [];
    const dfs = (i, res= '') => {
        if(i < s.length) {
            dfs(i+1, res + s[i]);
            if(s[i] >= 'a') dfs(i+1, res + s[i].toUpperCase());
        } else answer.push(res)
    }
    dfs(0);
    return answer;
};