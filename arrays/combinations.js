//Given two integers n and k, return all possible 
//combinations of k numbers out of the range [1, n].

//You may return the answer in any order.

var combine = function(n, k) {
    const nums = Array.from({length:n}, (_,i) => i+1);
    
    const res = [];
    function combine(arr, options, k) {
        if(k === 0) {
            res.push(arr);
        } else {
            for(let i = 0; i < options.length; i++) {
                combine([...arr, options[i]], options.slice(i+1), k-1)
            }
        }
    }
    combine([], nums, k);
    return res;
}