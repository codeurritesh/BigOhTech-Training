
// MARK: Temperature Conversion and Area Calculation

/**
 Converts Celsius to Fahrenheit.

 - Parameter celsius: The temperature in Celsius.
 - Returns: The temperature in Fahrenheit.
 */
const celsiusToFahrenheit=(celsius)=>{
    return (celsius*(9/5))+32;
}

/**
 Converts Fahrenheit to Celsius.

 - Parameter fahrenheit: The temperature in Fahrenheit.
 - Returns: The temperature in Celsius.
 */
const fahrenheitToCelsius=(fahrenheit)=>{
    return (fahrenheit-32)*(5/9);
}

/**
 Calculates the area of a circle.

 - Parameter radius: The radius of the circle.
 - Returns: The area of the circle.
 */
const areaOfCircle=(radius)=>{
    return 3.14*radius*radius;
}

/**
 Generic function to perform a calculation based on the provided operation and value.

 - Parameters:
   - operation: The operation function to be performed.
   - value: The value to be used in the calculation.
 - Returns: The result of the calculation.
 */
const calculate=(operation,value)=>{
    return operation(value);
}
console.log("Celsius to fahrenheit: "+calculate(celsiusToFahrenheit,32));
console.log("Fahrenheit To Celsius: "+calculate(fahrenheitToCelsius,66));
console.log("Area of Circle: "+calculate(areaOfCircle,32));
/**
 The code includes functions for converting Celsius to Fahrenheit, Fahrenheit to Celsius, and calculating the area of a circle.
 It also includes a generic 'calculate' function that takes an operation and a value to perform calculations.
 The example usage demonstrates calling the 'calculate' function with different operations and logging the results to the console.
 */