// MARK: Variable Validation

/**
 Validates a given variable for NaN, negativity, or being zero.

 - Parameter value: The variable to be validated.
 */
ValidateVariable(3,2);
function ValidateVariable(value){
    try{
        if(isNaN(value)){
            console.log("Value is Not a Number");
            return;
        }
        if(value<0){
            console.log("Value is Negative");
            return;
        }
        if(value==0){
            console.log("Value is Zero");
        }
    }
    catch{
        console.log("Value is not initialised or Decleared");
    }
}
/**
 The code defines a 'validateVariable' function that takes a variable as a parameter and checks for NaN, negativity, or being zero.
 The example usage demonstrates calling the 'validateVariable' function with the value NaN and logging the results to the console.
 */