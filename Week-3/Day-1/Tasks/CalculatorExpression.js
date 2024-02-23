// MARK: Expression Solver

/**
 A JavaScript function that takes a mathematical expression as a string and evaluates it using the eval function. It returns the result of the expression or an "Error" string if there's an issue with the evaluation.

 - Parameter expression: A string representing a mathematical expression.
 - Returns: The result of the mathematical expression or an "Error" string if evaluation fails.
 */

function solveExpression(expression) {
    try {
        return eval(expression);
    } catch (error) {
        return "Error";
    }
}

let expression = "1+(2+3)*4-10/2";
let answer = solveExpression(expression);
/**
 The solveExpression function is called with an example mathematical expression "1+(2+3)*4-10/2". The result is stored in the 'answer' variable, and it is then logged to the console.

 Console Output:
 The output of the expression "1+(2+3)*4-10/2" is logged to the console. In this case, the output is 16.
 */
console.log(answer); // output-16
