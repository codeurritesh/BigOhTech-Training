// MARK: Count Bracket Reversals

/**
 Counts the minimum number of bracket reversals required to balance a given string.

 - Parameter stringInput: The input string containing curly brackets.
 - Returns: The minimum number of bracket reversals needed or -1 if not possible.
 */
function countBracketReversals(stringInput) {
       // Check if the length of the string is even
    if (stringInput.length % 2 !== 0) {
        return -1;
    }

    let stack = [];
    let count = 0;

    for (let i = 0; i < stringInput.length; i++) {
        let c = stringInput.charAt(i);

        if (c === '{') {
            stack.push(c);
        } else {
            if (stack.length === 0 || stack[stack.length - 1] === '}') {
                stack.push(c);
            } else if (stack[stack.length - 1] === '{') {
                stack.pop();
            }
        }
    }
    // Process remaining brackets in the stack
    while (stack.length > 0) {
        let c1 = stack.pop();
        let c2 = stack.pop();

        if (c1 === c2) {
            count = count + 1;
        } else {
            count = count + 2;
        }
    }

    return count;
}
let stringInput = "{{{{}}}}";
let result = countBracketReversals(stringInput);
console.log(result);
/**
 The code defines a 'countBracketReversals' function that counts the minimum number of bracket reversals
 required to balance a given string containing curly brackets.
 The example usage demonstrates calling the function with a string and logging the result to the console.
 */