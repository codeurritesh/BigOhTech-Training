const value=4;
calculator(value);

// MARK: Calculator Functions
// Calculator function to perform various mathematical operations

function calculator(value){
    console.log(`Square Root of ${value} is `+squareRoot(value));
    console.log(`Square ${value} is `+square(value));
    console.log(`Log of ${value} is `+log(value));
    console.log(`ln of ${value} is `+ln(value));
    console.log(`Sin of ${value} is `+sin(value));
    console.log(`Cos of ${value} is `+cos(value));
    console.log(`Tan of ${value} is `+tan(value));
    console.log(`Power of 2 to 3 is `+power(2,3));
    console.log(`Area of Circle with radius ${value} is `+circleArea(value));
}

// Function to calculate the square root of a number
function squareRoot(value){
    return Math.sqrt(value);
}

// Function to calculate the square of a number
function square(value){
    return Math.pow(value,2);
}

// Function to calculate the logarithm of a number
function log(value){
    return Math.log(value);
}

// Function to calculate the natural logarithm of 10
function ln(value){
    return Math.LN10;
}

// Function to calculate the sine of an angle in radians
function sin(value){
    return Math.sin(value);
}

// Function to calculate the tangent of an angle in radians
function tan(value){
    return Math.tan(value);
}

// Function to calculate the cosine of an angle in radians
function cos(value){
    return Math.cos(value);
}

// Function to calculate the power of a number raised to another number
function power(x,y){
    return Math.pow(x,y);
}

// Function to calculate the area of a circle given its radius
function circleArea(radius){
    return 3.14*radius*radius;
}