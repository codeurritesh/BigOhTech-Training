// MARK: Basic Calculator

const value1=2;
const value2=5;
console.log("Answer: "+basicCalculator(value1,"+",value2));
console.log("Answer: "+basicCalculator(value1,"-",value2));
console.log("Answer: "+basicCalculator(value1,"*",value2));
console.log("Answer: "+basicCalculator(value1,"/",value2));
console.log("Answer: "+basicCalculator(value1,"%",value2));
// MARK: Basic Operation Calculator
// Function to perform basic arithmetic operations
function basicCalculator(a,operator,b){
        switch(operator){
            case "+":{
                return a+b;
            }
            case "-":{
                return a-b;
            }
            case "*":{
                return a*b;
            }
            case "/":{
                return a/b;
            }
            case "%":{
                return a%b;
            }
        }
}