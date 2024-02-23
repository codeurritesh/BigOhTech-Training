var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}

// MARK: Assert Objects Equal

/**
 Asserts whether two objects are equal and logs the result.

 - Parameters:
   - actual: The actual object.
   - expected: The expected object for comparison.
   - string: A string identifier for the assertion.
 */
const assertObjectsEqual=(actual,expected,string)=>{
    console.log(string);
    for(let property in expected){
        if(expected[property]!=actual[property]){
            console.log("FAILED Expected "+ JSON.stringify(expected)+" but got"+ JSON.stringify(actual));
            return;
        }
    }
    console.log("PASSED");
}
assertObjectsEqual(actual, expected, 'detects that two objects are equal');

/**
 The code defines an 'assertObjectsEqual' function that compares two objects for equality and logs the result.
 The example usage demonstrates calling the function with actual and expected objects along with a string identifier for the assertion.
 */