// Write a function that takes in a string made up of brackets( (, [, {, ), ], } )
// and other optional characters. The function should return a boolean reprsenting
// whether the string is balanced with regards to brackets. 
// A string is said to be balanced if it has as many opening brackets of a certain
// type as it has closing brackets of that type and if no bracket is unmatched. 
// Note that an opening bracket can't match a corresponding closing bracket that 
// comes before it, and similarly, a closing bracket can't match a corresponding 
// opening bracket that comes after it. Also, brackets can't overlap each other as in [(]).

// Last in first out, to keep track of all brackets
// O(n) time || O(n) space where n is the length of the input string
function balancedBrackets(string) {
    const openingBr = '({[';
    const closingBr = ')}]';
    const map = {
        ")" : "(",
        "]" : ")",
        "}" : "{"
    };
    const char = [];
    for (let i = 0; i < string.length; i++){
        let char = string[i];
        if(openingBr.includes(char)) { // if current character is a value add to a stack
            stack.push(char);
        } else if(closingBr.includes(char)){ // if current character is closing bracket
            if (stack.length == 0){ // it is already unbalanced
                return false;
            }
            if (stack[stack.length - 1] === map[char]){ // if we have our match
                stack.pop(); // we pop it from stack
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}



console.log(balancedBrackets("([])(){}(())()()"));