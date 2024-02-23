// Closure

/*
function fun(){
    let num=100;
    function increseNum(){
        num++;
        console.log(num);
    }
    return increseNum;
}
let func=fun();
func();
*/

// Objects

/* const object={
    firstName:"Ritesh",
    lastName:"Verma",
    age:22,
    address:{
        city:"Mathura",
        state:"Uttar Pradesh"
    }
}
console.log(Object.keys(object));               //Gives [ 'firstName', 'lastName', 'age', 'address' ]
console.log(Object.values(object));             //Gives [ 'Ritesh', 'Verma', 22, { city: 'Mathura', state: 'Uttar Pradesh' } ]
console.log(object.hasOwnProperty("age"));      //Gives true
*/

// ProtoType
// const person={
//     name:"Ritesh",
//     age: "25",
//     isAdult:true
// }

// let p1=Object.create(person);
// let p2=Object.create(p1);
// console.log(p2.name);                           // Prints Ritesh
// console.log(p2.age);                            // Prints 25
// console.log(p1.hasOwnProperty("name"))          // return False
// console.log(p2.hasOwnProperty("age"))           // return False
// console.log(p1);                                // Empty Object
// console.log(p2);                                // Empty Object
// console.log(p2.__proto__==p1);                  // Contains referance to the Parent Object
// console.log(p1.__proto__);                      // returns { name: 'Ritesh', age: '25', isAdult: true } means person
// console.log(person.__proto__);                  // returns Object
// console.log(Object.prototype.__proto__);        // returns null
// console.log(Boolean.prototype.__proto__);       // returns Object
// console.log(String.prototype.__proto__);        // returns Object
// console.log(Array.prototype.__proto__);         // returns Object
// console.log(Function.prototype.__proto__);      // returns Object

// Promises

// const promise=new Promise((resolve,reject)=>{
//     let randomNumber=Math.random();
//     console.log(randomNumber);
//     if(randomNumber<0.5){
//         resolve("Inrange");
//     }
//     else{
//         reject("Not in range");
//     }
// })

// promise.then((data)=>{
//     console.log(data);
//     console.log("Promise Resolve");
// }).catch((data)=>{
//     console.log(data);
//     console.log("Promise Reject");
// })

async function findDataFromApi(){
    const data=await fetch("https://api.restful-api.dev/objects");
    const apidata=await data.json();
    console.log(apidata)
    //     console.log("API Status code"+data.status);
    //     console.log("API Data");
    //     return data.json();
    // }).then((data)=>{
    //     console.log(data);
    // })
    console.log("after await")
}
findDataFromApi();

// function fun(){
//     let num=10;
//     function a(){
//         let num2=11;
//         console.log(num2);
//     }
// }
// fun();

// var a=1;
// function fun(){
//     let a=20;
//     console.log(a);
// }
// fun();
// console.log(a);
// const a=10;

// const newObj=new Object();


// const newObj={
//     fun:()=>{
//         console.log("Function Called");
//     }
// }
// newObj.fun();

