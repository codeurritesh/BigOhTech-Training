const result=addAllRecords(1,2,3,4,5,5,6,6,7);
console.log(result);

// MARK: Add All Records

/**
 Adds all the provided numeric values and returns the sum.

 - Parameter args: The numeric values to be added.
 - Returns: The sum of all the provided values.
 */
function addAllRecords(...args){
    let sum=0;
        for(let element of args){
        sum+=element;
        }
    return sum;
}

/**
 The code defines an 'addAllRecords' function that takes any number of numeric values as arguments and adds them together.
 The example usage demonstrates calling the function with multiple values and logging the result to the console.
 */